import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const EducationLevel = () => {

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theXData = []

    //fetch data
    axios.get('http://156.67.217.92/api/dashboard/education_level/')
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.bachelor_sum)) //ambil data y
        theYData2.push(parseInt(dataObj.master_sum)) //ambil data y
        theXData.push(dataObj.major_title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Bachelor',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'Master',
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
      <h1>Education Level</h1>
      <Bar 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default EducationLevel