import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const HistoryEditIsle
 = () => {

    const url = 'http://156.67.217.92/api/historic/employee/year'
    const url_division = 'http://156.67.217.92/api/utils/divs'
    const url_pdf = 'http://156.67.217.92/api/utils/employee/show_aas'

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const [year, setYear] = useState(newDate.getFullYear())
    
    const [data, setData] = useState([])
    const [dataDivision, setDataDivision] = useState([])
    const [dataPDF, setDataPDF] = useState()

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url + '/' + year)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

    //fetch DB divisions name
    useEffect(() => {getDataDivision()}, [])

    const getDataDivision = () => {
      fetch(url_division)
      .then(resp => resp.json())
      .then(resp => setDataDivision(resp))
    }

    //make the look up division option
    const divisionOption = {}
    dataDivision.map(title => {
      const { id, division } = title
      divisionOption[ id ] = division
    })

    //fetch DB download PDF
    useEffect(() => {getDataPDF()}, [])
  
    const getDataPDF = () => {
      fetch(url_pdf)
      .then(resp => resp.json())
      .then(resp => setDataPDF(resp))
    }

    const onSubmit = (e) => {
      e.preventDefault()
        fetch(url + '/' + year)
        .then(resp => resp.json())
        .then(resp => setData(resp))
  }

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title:'NIK', field:'staffNIK'},
      {title:'E-Mail', field:'email'},
      {title:'Role in Website', field:'role'},
      {title:'Staff Name', field:'staffName'},
      {title:'Division', field:'divison'},
      {title:'Stream', field:'stream'},
      {title:'Corporate Title', field:'corporateTitle'},
      {title:'Corporate Grade', field:'corporateGrade'},
      {title:'Date of Birth', field:'dateOfBirth'},
      {title:'Date Start First Employment', field:'dateStartFirstEmployment'},
      {title:'Date Join UOB', field:'dateJoinUOB'},
      {title:'Date Join IA Function', field:'dateJoinIAFunction'},
      {title:'As of Now', field:'asOfNow', editable:false},
      {title:'Age', field:'age', editable:false},
      {title:'Gen', field:'gen', editable:false},
      {title:'Gender', field:'gender'},
      {title:'Years of Audit Experience in UOB', field:'auditUOBExp', editable:false},
      {title:'Years of Audit Experience outside UOB', field:'auditNonUOBExp'},
      {title:'Total Audit Experience', field:'totalAuditExp', editable:false},
      {title:'Education Level', field:'educationLevel'},
      {title:'Educaiton Major', field:'educationMajor'},
      {title:'Education Category', field:'educationCategory'},
      {title:'RMG Certification', field:'RMGCertification'},
      {title:'CISA Certification', field:'CISA', editable:false},
      {title:'CEH Certification', field:'CEH', editable:false},
      {title:'ISO27001 Certification', field:'ISO27001', editable:false},
      {title:'CHFI Certification', field:'CHFI', editable:false},
      {title:'IDEA', field:'IDEA', editable:false},
      {title:'Qualified Internal Auditor', field:'QualifiedIA', editable:false},
      {title:'CBIA Certification', field:'CBIA', editable:false},
      {title:'CIA Certification', field:'CIA', editable:false},
      {title:'CPA Certification', field:'CPA', editable:false},
      {title:'CA Certification', field:'CA', editable:false},
      {title:'Other Certification', field:'other_cert'},
      {title:'Internal Audit Background', field:'IABackgground'},
      {title:'External Audit Background', field:'EABackground'},
      {title:'Still in IA', field:'active'}
  ]

  const doc = new jsPDF({
    orientation: 'l', 
        unit: 'pt', 
        format: [2000, 4000]
  });

  const onDownload = () => {


    doc.autoTable({
        head: [
            [
            'ID',
            'NIK',
            'E-Mail',
            'Role in Website',
            'Staff Name',
            'Division',
            'Stream',
            'Corporate Title',
            'Corporate Grade',
            'Date of Birth',
            'Date Start First Employment',
            'Date Join UOB',
            'Date Join IA Function',
            'As of Now',
            'Age',
            'Gen',
            'Gender',
            'Years of Audit Experience in UOB',
            'Years of Audit Experience outside UOB',
            'Total Audit Experience',
            'Education Level',
            'Educaiton Major',
            'Education Category',
            'RMG Certification',
            'CISA Certification',
            'CEH Certification',
            'ISO27001 Certification',
            'CHFI Certification',
            'IDEA',
            'Qualified Internal Auditor',
            'CBIA Certification',
            'CIA Certification',
            'CPA Certification',
            'CA Certification',
            'Other Certification',
            'Internal Audit Background',
            'External Audit Background',
            'Still in IA'
        ],
        
    ],
        body: dataPDF
      })

    doc.save("Employee Data History.pdf");
}

    return (
        <div>

<form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Year</label>
                <input type='number' placeholder='Year' 
                value={year} onChange={(e) => setYear(e.target.value)}
                />
            </div> 

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
          </form>
           
          <button onClick={onDownload}>Download Database as PDF</button>
            <MaterialTable
                title='Employee'
                data={data}
                columns={columns}
                options={{
                    filterRowStyle:true,
                    actionsColumnIndex:-1,
pageSize: 15,
pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
                    addRowPosition:'first',
                    filtering:true
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default HistoryEditIsle

