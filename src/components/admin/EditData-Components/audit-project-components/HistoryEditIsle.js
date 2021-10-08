import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'

import MaterialTable, { MTableEditField, AutoComplete } from "material-table";
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
import {Link} from '@material-ui/core'

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

const HistoryEditIsle = () => {

    const url = 'http://103.200.4.18:8181/api/admin/audit_project_data/table_data'

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const [year, setYear] = useState(newDate.getFullYear())
    
    const [data, setData] = useState([])

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url + '/' + year)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

    //on submit
    const onSubmit = (e) => {
      e.preventDefault()
        fetch(url + '/' + year)
        .then(resp => resp.json())
        .then(resp => setData(resp))
  }

    const auditPlanThisYear = (year + ' Audit Plan')

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title: auditPlanThisYear, field:'auditPlan'},
      {title:'Audit Division', field:'division', lookup: { 'WBGM': 'WBGM', 'RBA': 'RBA', 'BRDS': 'BRDS', 'TAD':'TAD', 'PPA':'PPA' }},
      {title:'TL Name', field:'TL_name', editable:false},
      {title:'TL NIK', field:'TL_nik', type:'numeric'},
      {title:'Status', field:'status', lookup: { 'Not Started': 'Not Started', 'Planning': 'Planning', 'Fieldwork': 'Fieldwork', 'Reporting':'Reporting', 'Sign-off':'Sign-off', 'Completed':'Completed' }},
      {title:'Use of DA', field:'useOfDA', lookup: { 'true': 'true', 'false': 'false' }},
      {title:'Year', field:'year', type:'numeric'},
      {title:'Is Carried Over', field:'is_carried_over', lookup: { 'true': 'true', 'false': 'false' }},
      {title:'Timely Report', field:'timely_report', lookup: { 'true': 'true', 'false': 'false' }},
      {title:'PA Completion', field:'completion_PA', editable:false},
      {title:'Download PA Completion', field:'download_proof', editable:false,
      render:rowData=>
      <Link href={"http://103.200.4.18:8181/api/admin/audit_project_data/download/pa/id/" + rowData.id}>
        {<p>download</p>}
      </Link>}
  ]

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
            <MaterialTable
            title='Audit Projects'
                data={data}
                columns={columns}
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

export default HistoryEditIsle
