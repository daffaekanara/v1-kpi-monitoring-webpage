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

const DetailsTableHistory = () => {

    const url = 'http://156.67.217.92/api/admin/attrition/rot_table'
    const url_division = 'http://156.67.217.92/api/utils/divs'
    
    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const [month, setMonth] = useState(newDate.getMonth())
    const [year, setYear] = useState(newDate.getFullYear())
    
    const [data, setData] = useState([])
    const [dataDivision, setDataDivision] = useState([])

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url + '/year/' + year + '/month/' + month)
      .then(resp => resp.json())
      .then(resp => setData(resp))

      console.log(data)
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

    const onSubmit = (e) => {
      e.preventDefault()
      
        fetch(url + '/year/' + year + '/month/' + month)
        .then(resp => resp.json())
        .then(resp => setData(resp))

        fetch(url_division)
      .then(resp => resp.json())
      .then(resp => setDataDivision(resp))

      dataDivision.map(title => {
        const { id, division } = title
        divisionOption[ id ] = division
      })
  }

    const columns=[
      {title:'ID.', field:'id', editable:false},
      {title:'Employee Name', field:'employee_name', editable:false},
      {title: 'Employee NIK', field:'employee_nik', type:'numeric'},
      {title: 'Date', field:'date', type:'date'},
      {title: 'From Division:', field:'from_div', lookup: divisionOption},
      {title: 'To Division:', field:'to_div', lookup: divisionOption}
  ]

    return (
        <div>
            <h1 className='header'>Rotation Table (History)</h1>
          <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Year</label>
                <input type='number' placeholder='Year' 
                value={year} onChange={(e) => setYear(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Month</label>
                <input type='number' placeholder='Month' 
                value={month} onChange={(e) => setMonth(e.target.value)}
                />
            </div> 

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
          </form>
            <MaterialTable
                title='Details'
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
                    fetch(url + "/id/" + oldData.id, {
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
                    fetch(url + "/id/" + oldData.id, {
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
                    filtering:true,
                    pageSize: 11
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default DetailsTableHistory

