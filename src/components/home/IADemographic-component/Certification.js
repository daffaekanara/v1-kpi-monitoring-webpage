import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../../profile/About-components/DetailsButton'

const Certification = () => {

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theXData = []

    //fetch data
    axios.get('http://103.200.4.18:8181/api/dashboard/smr_certification/')
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.sum_per_level)) //ambil data y
        theXData.push(dataObj.smr_level) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'SMR Level',
            data: theYData1,
            backgroundColor:[
              '#F06C64',
                  '#FDD056',
                  '#E9E0AC',
                  '#519085',
                  '#88CED2',
                  '#00AA8F'
            ]
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
      <h1>SMR Certification</h1>
      <Doughnut 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
      <div className='header'>
      <Link to='/SMR_cert_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default Certification