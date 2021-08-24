import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const YourCSF = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  const link = ('http://156.67.217.92/api/csf/overall_csf/' + year)

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(dataObj.rate) //ambil data y
        theXData.push(dataObj.title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Score',
            data: theYData1,
            backgroundColor:[
              '#6BAF92',
              '#DFEAE2'
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

  //on submit form isi tahun
  const onSubmit = (e) => {
    e.preventDefault()

    let theYData1 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(dataObj.rate) //ambil data y
        theXData.push(dataObj.title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Score',
            data: theYData1,
            backgroundColor:[
              '#6BAF92',
              '#DFEAE2'
            ]
          }
        ]
      })
    })

  }

  return (
    <div className='container'>
      <h1>Overall CSF</h1>
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
      <Doughnut 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default YourCSF