import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

const WBGM = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/attrition/rate_wbgm_testing/year'
  const link = (base_link + '/' + year)

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])
  const [text_inside, setText_inside] = useState('')

  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theXData = []

    axios.get(link)
    .then(res => {
      console.log(res.data[0])
      setText_inside(res.data[0].text)
      theYData1.push(res.data[0].rate)
      theYData1.push(res.data[0].else_rate)
      theXData.push(res.data[0].title_rate)
      theXData.push(res.data[0].title_else)

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'attrition Rate',
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
  }

  return (
    <div className='container'>
      <h1>WBGM</h1>
      <form className='add-form'>
            <div className='form-control'>
                <label>Year</label>
                <input type='number' placeholder='Year' 
                value={year} onChange={(e) => setYear(e.target.value)}
                />
            </div> 
            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
          </form>
          <h1 className='header'><b>{"Attrition Rate: " + text_inside + "%"}</b></h1>
      <Doughnut 
        data={chartData}
        options={{
          plugins: {
            datalabels: {
              formatter: (value) => {
                return value + '%';
              }
            }
          }
        }}
      />
    </div>
  )
}

export default WBGM