import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../../profile/About-components/DetailsButton'

const AgeGroup = () => {

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theXData = []

    //fetch data
    axios.get('http://103.200.4.18:8181/api/dashboard/age_group/')
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.male_sum)) //ambil data y
        theYData2.push(parseInt(dataObj.female_sum)) //ambil data y
        theXData.push(dataObj.gen_name) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Male',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'Female',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
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
      <h1>Age Group</h1>
      <Bar 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
      <div className='header'>
      <Link to='/Age_group_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default AgeGroup