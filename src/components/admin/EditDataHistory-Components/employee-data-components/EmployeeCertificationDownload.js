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

const EmployeeCertificationDownload = () => {

    const url = 'http://103.200.4.18:8181/api/admin/employee/tables/cert/nik'
    
  const [nik,setNik] = useState('999')
  const [download_link, setDownload_link] = useState('http://103.200.4.18:8181/api/profile/get_cert_proof/id/')
  const [data, setData] = useState([])

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url + '/' + nik)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

    //on submit
    const onSubmit = (e) => {
      e.preventDefault()
        fetch(url + '/' + nik)
        .then(resp => resp.json())
        .then(resp => setData(resp))
  }

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title: 'Employee Name', field:'employee_name', editable:false},
      {title:'Certificate Name', field:'certifcate_name', editable:false},
      {title:'Download Certificate', field:'download_proof', editable:false,
      render:rowData=>
      <Link href={download_link + rowData.id}>
        {<p>download</p>}
      </Link>}
  ]

    return (
        <div className='container'>
          <h1>Employee Certificate</h1>
          <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>NIK</label>
                <input type='number' placeholder='NIK' 
                value={nik} onChange={(e) => setNik(e.target.value)}
                />
            </div> 

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
          </form>
            <MaterialTable
            title='Audit Projects'
                data={data}
                columns={columns}
                editable={{
                    onRowDelete: (oldData) => new Promise((resolve, reject) => {
                        //Backend call
                        fetch('http://103.200.4.18:8181/api/admin/employee/tables/cert/id/' + oldData.id, {
                          method: "DELETE",
                          headers: {
                            'Content-type': "application/json"
                          },
            
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

export default EmployeeCertificationDownload
