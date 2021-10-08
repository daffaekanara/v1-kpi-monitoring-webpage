import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../profile/About-components/DetailsButton'

const AttritionRateBar = () => {

    const arbitraryStackKey = "stack1"

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/attrition/staff_attrition'
  const link = (base_link + '/' + year)

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
        theYData1.push(parseInt(dataObj.headcounts)) //ambil data y
        theYData2.push(parseInt(dataObj.join)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            stack: arbitraryStackKey,
            label:'Attrition Rate',
            data: theYData1,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            stack: arbitraryStackKey,
            label:'',
            data: theYData2,
            backgroundColor:'#cbcbcb'
          }
        ]
      })
    })
    .catch(err => {
      console.log(err)
    })
    console.log(theYData1, theYData2,theXData)
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
        theYData1.push(parseInt(dataObj.headcounts)) //ambil data y
        theYData2.push(parseInt(dataObj.join)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            stack: arbitraryStackKey,
            label:'Attrition Rate',
            data: theYData1,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            stack: arbitraryStackKey,
            label:'',
            data: theYData2,
            backgroundColor:'#cbcbcb'
          }
        ]
      })
    })
  }

  const options = {
    scales: {
         xAxes: [{
             stacked: true
         }],
         yAxes: [{
             stacked: true
         }]
     }
 }

  return (
    <div className='container'>
      <h1>Attrition Rate</h1>
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
        options={options}
        plugins={[ChartDataLabels]}
      />
      <div className='header'>
      <Link to='/Staff_attrition_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default AttritionRateBar