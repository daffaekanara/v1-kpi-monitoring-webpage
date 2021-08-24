import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

const WBGM = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://156.67.217.92/api/attrition/rate/WBGM'
  const link = (base_link + '/' + year)

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])

  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theXData = []
    let textRate = []

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

  //configure untuk text didalam doughnut chart, tapi masih ga ngerti cara ambil dari API nya
  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  //on submit form isi tahun
  const onSubmit = (e) => {
    e.preventDefault()

    let theYData1 = []
    let theXData = []
    let textRate = []

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
      <h1>WBGM</h1>
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
        plugins={plugins}
      />
    </div>
  )
}

export default WBGM