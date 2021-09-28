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
import XLSX from 'xlsx'
import { element } from 'prop-types';

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

const QaTable2 = () => {

    const url = 'http://localhost:5000/testing_table'
    const [data, setData] = useState([])
    const convertToJson = (data) => {
      data.forEach(row => {
        row.forEach(element => console.log(element))

      });
    }

    //fetch DB
    useEffect(() => {getData()}, [])
  
    const getData = () => {
      fetch(url)
      .then(resp => resp.json())
      .then(resp => setData(resp))
    }

      const columns=[
        {title:'No.', field:'id'},
        {title:'Plan', field:'plan'},
        {title:'Audit Project', field:'auditProject'},
        {title:'Team Leader', field:'teamLeader'},
        {title:'Divison Head', field:'divisionHead'},
        {title:'Result', field:'result'},
        {title:'Category', field:'category'},
        {title:'Stage', field:'stage'},
        {title:'Deliverables', field:'deliverables'},
        {title:'No. of Issue(s)', field:'numberIssues'},
        {title:'QA Sample', field:'sample'}
    ]

    const importExcel=(e)=>{
      const file = e.target.files[0]

      const reader = new FileReader()
      reader.onload=(event) => {
        
        //parse data
        const bstr = event.target.result
        const workBook = XLSX.read(bstr, {type:'binary'})

        //get first sheet
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]

        //convert to array
        const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1})
        //console.log(fileData)

        fileData.splice(0, 1)
        convertToJson(fileData)
      }

      reader.readAsBinaryString(file)
    }

    return (
        <div>
          <input type='file' onChange={importExcel}/>
            <MaterialTable
                title='QA Information'
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
                  })
                }}
                options={{
                    filterRowStyle:true,
                    actionsColumnIndex:-1,
pageSize: 15,
pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
                    addRowPosition:'first',
                    exportButton:true
                }}
                icons={tableIcons}
            />
        </div>
    )
}

export default QaTable2
