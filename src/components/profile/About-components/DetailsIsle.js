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

//user data
import useToken from '../../../useToken';
import jwt from 'jwt-decode'

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

const DetailsIsle = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const base_url = 'http://103.200.4.18:8181/api/profile/about/table_data/'

    const url = base_url + decode.nik

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    
    const [data, setData] = useState([])

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title:'NIK', field:'staffNIK', type:'numeric'},
      {title:'E-Mail', field:'email'},
      {title:'Role in Website', field:'role', editable: false},
      {title:'Staff Name', field:'staffName'},
      {title:'Division', field:'divison', editable:false},
      {title:'Stream', field:'stream'},
      {title:'Corporate Title', field:'corporateTitle'},
      {title:'Corporate Grade', field:'corporateGrade'},
      {title:'Date of Birth', field:'dateOfBirth', type:'date'},
      {title:'Date Start First Employment', field:'dateStartFirstEmployment', type:'date'},
      {title:'Date Join UOB', field:'dateJoinUOB', type:'date'},
      {title:'Date Join IA Function', field:'dateJoinIAFunction', type:'date'},
      {title:'As of Now', field:'asOfNow', type:'date', editable:false},
      {title:'Age', field:'age', editable:false},
      {title:'Gen', field:'gen', editable:false},
      {title:'Gender', field:'gender', lookup: { 'M': 'M', 'F': 'F' }},
      {title:'Years of Audit Experience in UOB', field:'auditUOBExp', editable:false},
      {title:'Years of Audit Experience outside UOB', field:'auditNonUOBExp', type:'numeric'},
      {title:'Total Audit Experience', field:'totalAuditExp', editable:false},
      {title:'Education Level', field:'educationLevel', lookup: { 'Bachelor': 'Bachelor', 'Master': 'Master', 'Doctoral' : 'Doctoral' }},
      {title:'Educaiton Major', field:'educationMajor'},
      {title:'Education Category', field:'educationCategory', lookup: { 'Management/Economy': 'Management/Economy', 'Information Technology': 'Information Technology', 'Others': 'Others' }},
      {title:'RMG Certification', field:'RMGCertification', lookup: { '-': '-', 'Level 1': 'Level 1', 'Level 2': 'Level 2', 'Level 3':'Level 3', 'Level 4':'Level 4', 'Level 5':'Level 5', 'In Progress':'In Progress' }},
      {title:'CISA Certification', field:'CISA',editable:false},
      {title:'CEH Certification', field:'CEH',editable:false},
      {title:'ISO27001 Certification', field:'ISO27001',editable:false},
      {title:'CHFI Certification', field:'CHFI',editable:false},
      {title:'IDEA', field:'IDEA',editable:false},
      {title:'Qualified Internal Auditor', field:'QualifiedIA',editable:false},
      {title:'CBIA Certification', field:'CBIA',editable:false},
      {title:'CIA Certification', field:'CIA',editable:false},
      {title:'CPA Certification', field:'CPA',editable:false},
      {title:'CA Certification', field:'CA',editable:false},
      {title:'Other Certification', field:'other_cert'},
      {title:'Internal Audit Background', field:'IABackgground', lookup: { 'true': 'true', 'false': 'false' }},
      {title:'External Audit Background', field:'EABackground', lookup: { 'true': 'true', 'false': 'false' }}
  ]

    return (
        <div>
            <MaterialTable
                title='Your Data'
                data={data}
                columns={columns}
                editable={{
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
                  })
                }}
                options={{
                    filterRowStyle:true,
                    actionsColumnIndex:-1,
pageSize: 15,
pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
                    addRowPosition:'first',
                    exportButton:true,
                    filtering:true
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default DetailsIsle
