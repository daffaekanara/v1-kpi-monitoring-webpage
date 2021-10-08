import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

const TADRate = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/attrition/rate/TAD'
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

    //fetch data
    axios.get(link)
    .then(res => {
      setText_inside(res.data[0].rate)
      for(const dataObj of res.data){
        theYData1.push(dataObj.rate) //ambil data y
        theXData.push(dataObj.title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

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
      setText_inside(res.data[0].rate)
      for(const dataObj of res.data){
        theYData1.push(dataObj.rate) //ambil data y
        theXData.push(dataObj.title) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

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

  }

  return (
    <div className='container'>
      <h1>TAD</h1>
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
          <h1 className='header'><b>{"Attrition Rate: " + text_inside + "%"}</b></h1>
      <Doughnut 
        data={chartData}
        options={{

        }}
      />
    </div>
  )
}

export default TADRate