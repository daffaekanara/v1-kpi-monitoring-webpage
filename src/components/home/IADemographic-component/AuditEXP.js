import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../../profile/About-components/DetailsButton'

const AuditEXP = () => {

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theYData3 = []
    let theXData = []

    //fetch data
    axios.get('http://156.67.217.92/api/dashboard/audit_exp/')
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.in_uob)) //ambil data y
        theYData2.push(parseInt(dataObj.outside_uob)) //ambil data y
        theYData3.push(parseInt(dataObj.total_exp)) //ambil data y
        theXData.push(dataObj.year) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Inside UOB',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'Outside UOB',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            label:'Total',
            data: theYData2,
            backgroundColor:'#ABD5AB'
          }
        ]
      })
    })
    .catch(err => {
      console.log(err)
    })
    console.log(theYData1, theXData)
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div className='container'>
      <h1>Audit Experience</h1>
      <Bar 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
      <div className='header'>
      <Link to='/Audit_exp_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default AuditEXP