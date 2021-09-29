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

const Editisle = () => {

    const url = 'http://156.67.217.92/api/admin/csf_data/table_data'
    const url_title = 'http://156.67.217.92/api/utils/title_project'
    const base_url_pdf = 'http://156.67.217.92/api/utils/csf/show_aas/year/'
    const url_division = 'http://156.67.217.92/api/utils/divs'

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const [year, setYear] = useState(newDate.getFullYear())
    
    const [data, setData] = useState([])
    const [dataTitles, setDataTitles] = useState([])
    const [dataPDF, setDataPDF] = useState()
    const [url_pdf, seturl_pdf] = useState(base_url_pdf + year)

    const [dataDivision, setDataDivision] = useState([])


    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url + '/' + year)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

    //fetch DB project title
    useEffect(() => {getDataTitle()}, [])

    const getDataTitle = () => {
      fetch(url_title + '/' + year)
      .then(resp => resp.json())
      .then(resp => setDataTitles(resp))
    }

    //make the look up project title option
    const titleOption = {}
    dataTitles.map(title => {
      const { id, project_title } = title
      titleOption[ id ] = project_title
    })

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
      divisionOption[ division ] = division
    })

    const onSubmit = (e) => {
      e.preventDefault()
        fetch(url + year)
        .then(resp => resp.json())
        .then(resp => setData(resp))

        fetch(url_division)
        .then(resp => resp.json())
        .then(resp => setDataDivision(resp))
  
        dataDivision.map(title => {
          const { id, division } = title
          divisionOption[ id ] = division
        })

        fetch(url_title + '/' + year)
      .then(resp => resp.json())
      .then(resp => setDataTitles(resp))
      
      const titleOption = {}
    dataTitles.map(title => {
      const { id, project_title } = title
      titleOption[ id ] = project_title
    })
  }

  //fetch DB download PDF
  useEffect(() => {getDataPDF()}, [])
  
  const getDataPDF = () => {
    fetch(url_pdf)
    .then(resp => resp.json())
    .then(resp => setDataPDF(resp))
  }

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title:'Division (Project)', field:'division_project', editable:false},
      {title:'Audit Project', field:'auditProject', lookup: titleOption},
      {title:'Client Name', field:'clientName'},
      {title:'Unit / Jabatan', field:'unitJabatan'},
      {title:'TL', field:'TL', editable:false},
      {title:'CSF Date', field:'CSFDate', type:'date'},
      {title:'ATP 1', field:'atp1', type:'numeric'},
      {title:'ATP 2', field:'atp2', type:'numeric'},
      {title:'ATP 3', field:'atp3', type:'numeric'},
      {title:'ATP 4', field:'atp4', type:'numeric'},
      {title:'ATP 5', field:'atp5', type:'numeric'},
      {title:'ATP 6', field:'atp6', type:'numeric'},
      {title:'ATP Overall', field:'atpOverall', editable:false},
      {title:'AC 1', field:'ac1', type:'numeric'},
      {title:'AC 2', field:'ac2', type:'numeric'},
      {title:'AC 3', field:'ac3', type:'numeric'},
      {title:'AC 4', field:'ac4', type:'numeric'},
      {title:'AC 5', field:'ac5', type:'numeric'},
      {title:'AC 6', field:'ac6', type:'numeric'},
      {title:'AC Overall', field:'acOverall', editable:false},
      {title:'PAW 1', field:'paw1', type:'numeric'},
      {title:'PAW 2', field:'paw2', type:'numeric'},
      {title:'PAW 3', field:'paw3', type:'numeric'},
      {title:'PAW Overall', field:'pawOverall', editable:false},
      {title:'Overall', field:'overall', editable:false},
      {title:'Division (involvement)', field:'division_by_inv', lookup: divisionOption}
  ]

  const doc = new jsPDF({
    orientation: 'l', 
        unit: 'pt', 
        format: [2000, 2000]
  });

  const onDownload = () => {


    doc.autoTable({
        head: [
            [
            'ID',
            'Division (Project)',
            'Audit Project',
            'Client Name',
            'Unit / Jabatan',
            'TL',
            'CSF Date',
            'ATP 1',
            'ATP 2',
            'ATP 3',
            'ATP 4',
            'ATP 5',
            'ATP 6',
            'ATP Overall',
            'AC 1',
            'AC 2',
            'AC 3',
            'AC 4',
            'AC 5',
            'AC 6',
            'AC Overall',
            'PAW 1',
            'PAW 2',
            'PAW 3',
            'PAW OVerall',
            'Overall',
            'division (involvement)'
        ],
        
    ],
        body: dataPDF
      })

    doc.save("CSF.pdf");
}

    return (
        <div>
           
          <button onClick={onDownload}>Download Database as PDF</button>
            <MaterialTable
                title='CSF'
                data={data}
                columns={columns}
                editable={{
                  onRowAdd: (newData) => new Promise((resolve, reject) => {
                    //Backend call
                    fetch(url, {
                      method: "POST",
                      headers: {
                        'Content-type': "application/json"
                      },
                      body: JSON.stringify(newData)
                    }).then(resp => resp.json())
                      .then(resp => {
                        getData()
                        resolve()
                      })
                  }),
                  onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                    //Backend call
                    fetch(url + "/" + oldData.id, {
                      method: "PATCH",
                      headers: {
                        'Content-type': "application/json"
                      },
                      body: JSON.stringify(newData)
                    }).then(resp => resp.json())
                      .then(resp => {
                        getData()
                        resolve()
                      })
                  }),
                  onRowDelete: (oldData) => new Promise((resolve, reject) => {
                    //Backend call
                    fetch(url + "/" + oldData.id, {
                      method: "DELETE",
                      headers: {
                        'Content-type': "application/json"
                      },
        
                    }).then(resp => resp.json())
                      .then(resp => {
                        getData()
                        resolve()
                      })
                  }),
                  onBulkUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                    //Backend call
                    fetch(url + "/" + oldData.id, {
                      method: "PATCH",
                      headers: {
                        'Content-type': "application/json"
                      },
                      body: JSON.stringify(newData)
                    }).then(resp => resp.json())
                      .then(resp => {
                        getData()
                        resolve()
                      })
                  })
                }}
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

export default Editisle
