import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DetailsButton from '../profile/About-components/DetailsButton'

const AuditProjects = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/projects/total_by_division/v2'
  const div_link = 'http://103.200.4.18:8181/api/utils/divs'
  const link = (base_link + '/' + year)

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  const [theData, setTheData] = useState()


  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res.data)
      setChartData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //on submit form isi tahun
  const onSubmit = (e) => {
    e.preventDefault()

    axios.get(link)
    .then(res => {
      console.log(res.data)
      setChartData(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }

  return (
    <div className='container'>
      <h1>Audit Projects</h1>
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
      <Link to='/Audit_projects_details'><DetailsButton/></Link>
      </div>
    </div>
  )
}

export default AuditProjects