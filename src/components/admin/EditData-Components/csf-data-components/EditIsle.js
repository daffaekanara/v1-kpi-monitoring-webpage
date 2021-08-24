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

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const [year, setYear] = useState(newDate.getFullYear())
    
    const [data, setData] = useState([])
    const [dataTitles, setDataTitles] = useState([])


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

    const onSubmit = (e) => {
      e.preventDefault()
        fetch(url + '/' + year)
        .then(resp => resp.json())
        .then(resp => setData(resp))
  }

    const columns=[
      {title:'No.', field:'id', editable:false},
      {title:'Division (Project)', field:'division_project', editable:false},
      {title:'Audit Project', field:'auditProject', lookup: titleOption},
      {title:'Client Name', field:'clientName'},
      {title:'Unit / Jabatan', field:'unitJabatan'},
      {title:'TL', field:'TL'},
      {title:'CSF Date', field:'CSFDate', type:'date'},
      {title:'ATP 1', field:'atp1'},
      {title:'ATP 2', field:'atp2'},
      {title:'ATP 3', field:'atp3'},
      {title:'ATP 4', field:'atp4'},
      {title:'ATP 5', field:'atp5'},
      {title:'ATP 6', field:'atp6'},
      {title:'ATP Overall', field:'atpOverall', editable:false},
      {title:'AC 1', field:'ac1'},
      {title:'AC 2', field:'ac2'},
      {title:'AC 3', field:'ac3'},
      {title:'AC 4', field:'ac4'},
      {title:'AC 5', field:'ac5'},
      {title:'AC 6', field:'ac6'},
      {title:'AC Overall', field:'acOverall', editable:false},
      {title:'PAW 1', field:'paw1'},
      {title:'PAW 2', field:'paw2'},
      {title:'PAW 3', field:'paw3'},
      {title:'PAW Overall', field:'pawOverall', editable:false},
      {title:'Overall', field:'overall', editable:false},
      {title:'Division (involevement)', field:'division_by_inv', lookup: {'division' : 'division', 'project' : 'project' }}
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
                    addRowPosition:'first',
                    exportButton:true,
                    filtering:true
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default Editisle
