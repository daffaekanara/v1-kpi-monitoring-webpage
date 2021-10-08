import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../../profile/About-components/DetailsButton'

const Certification2 = () => {

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theXData = []

    //fetch data
    axios.get('http://103.200.4.18:8181/api/dashboard/pro_certification')
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.sum_per_name)) //ambil data y
        theXData.push(dataObj.certification_name) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Professional Certification',
            data: theYData1,
            backgroundColor:[
              '#F06C64',
                  '#FDD056',
                  '#E9E0AC',
                  '#519085',
                  '#88CED2',
                  '#00AA8F',
                  '#517281',
                  '#7895a2',
                  '#afc1cc',
                  '#bca0dc'
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
      <h1>Professional Certification</h1>
      <Doughnut 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
      <div className='header'>
      <Link to='/Prof_cert_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default Certification2