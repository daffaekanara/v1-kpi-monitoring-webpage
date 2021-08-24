import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const ClientSurvey = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  const link = ('http://156.67.217.92/api/csf/client_survey/' + year)
  
  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.by_division)) //ambil data y
        theYData2.push(parseInt(dataObj.by_project)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'By Division',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'By Project',
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

  //on submit form isi tahun
  const onSubmit = (e) => {
    e.preventDefault()

    let theYData1 = []
    let theYData2 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.by_division)) //ambil data y
        theYData2.push(parseInt(dataObj.by_project)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'By Division',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'By Project',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          }
        ]
      })
    })

  }

  return (
    <div className='container'>
      <h1>Client Survey</h1>
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
      <Bar 
        data={chartData}
        options={{

        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default ClientSurvey