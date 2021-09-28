import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../profile/About-components/DetailsButton'

const TotalJoin = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  //API modification
  const base_link = 'http://156.67.217.92/api/attrition/staff_attrition'
  const link = (base_link + '/' + year)

  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theYData3 = []
    let theYData4 = []
    let theYData5 = []
    let theYData6 = []
    let theYData7 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.headcounts)) //ambil data y
        theYData2.push(parseInt(dataObj.join)) //ambil data y
        theYData3.push(parseInt(dataObj.resign)) //ambil data y
        theYData4.push(parseInt(dataObj.transfer_in)) //ambil data y
        theYData5.push(parseInt(dataObj.transfer_out)) //ambil data y
        theYData6.push(parseInt(dataObj.rotation_in)) //ambil data y
        theYData7.push(parseInt(dataObj.rotation_out)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Headcounts',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'Join',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            label:'Resign',
            data: theYData3,
            backgroundColor:'#8bc34a'
          },
          {
            label:'Transfer In',
            data: theYData4,
            backgroundColor:'#b19cd9'
          },
          {
            label:'Transfer Out',
            data: theYData3,
            backgroundColor:'#abdee6'
          },
          {
            label:'Rotation In',
            data: theYData3,
            backgroundColor:'#cbaacb'
          },
          {
            label:'Rotation Out',
            data: theYData3,
            backgroundColor:'#c6dbda'
          },
        ]
      })
    })
    .catch(err => {
      console.log(err)
    })
    console.log(theYData1, theYData2, theYData3, theYData4, theXData)
  }

  //on submit form isi tahun
  const onSubmit = (e) => {
    e.preventDefault()

    let theYData1 = []
    let theYData2 = []
    let theYData3 = []
    let theYData4 = []
    let theXData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        theYData1.push(parseInt(dataObj.headcounts)) //ambil data y
        theYData2.push(parseInt(dataObj.join)) //ambil data y
        theYData3.push(parseInt(dataObj.resign)) //ambil data y
        theYData4.push(parseInt(dataObj.transfer)) //ambil data y
        theXData.push(dataObj.division) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'Headcounts',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'Join',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            label:'Resign',
            data: theYData3,
            backgroundColor:'#8bc34a'
          },
          {
            label:'Transfer',
            data: theYData4,
            backgroundColor:'#b19cd9'
          }
        ]
      })
    })
  }

  return (
    <div className='container'>
      <h1>Staff Attrition</h1>
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
      <div className='header'>
      <Link to='/Staff_attrition_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default TotalJoin