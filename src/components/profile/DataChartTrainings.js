import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

//user data
import useToken from '../../useToken'
import jwt from 'jwt-decode'

const DataChartTrainings = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

  //setting year
  const newDate = new Date()
  const year = newDate.getFullYear()
  const [text_inside, setText_inside] = useState('')

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/profile/data_chart_trainings'
  const link = (base_link + '/' + decode.nik + '/' + year)


  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      setText_inside(res.data[0].total_training)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.total_training)) //ambil data y
        theXData.push(dataObj.title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Trainings',
            data: theYData1,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              '#cbcbcb'
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
      <h1>{"Your Training this year: " + text_inside + "% done."}</h1>
      <Doughnut 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default DataChartTrainings