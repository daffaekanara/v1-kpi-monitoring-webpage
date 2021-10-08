import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const AuditProjects = () => {

  //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/projects/total_by_division'
  const div_link = 'http://103.200.4.18:8181/api/utils/divs'
  const link = (base_link + '/' + year)

  const [chartData, setChartData] = useState({})
  const [yData, setYData] = useState([])
  const [xData, setXData] = useState([])


  useEffect(() => {
    chart()
  }, [])

  const chart = () => {

    let theYData1 = []
    let theYData2 = []
    let theYData3 = []
    let theYData4 = []
    let theYData5 = []
    let theXData = []
    let the_keys = []
    let allData = []

    //fetch data
    axios.get(link)
    .then(res => {
      console.log(res.data)
      
      for(const key in res.data[0]){
        the_keys.push(key)
        console.log(the_keys)
      }

      for(const dataObj of res.data){
        theXData.push(dataObj[the_keys[0]]) //ambil data x
        theYData1.push(parseInt(dataObj[the_keys[1]])) //ambil data y
        theYData2.push(parseInt(dataObj[the_keys[2]])) //ambil data y
        theYData3.push(parseInt(dataObj[the_keys[3]])) //ambil data y
        theYData4.push(parseInt(dataObj[the_keys[4]])) //ambil data y
        theYData5.push(parseInt(dataObj[the_keys[5]])) //ambil data y

      }

      for(const dataObj of res.data){
        allData.push(dataObj)
        console.log(allData[0])
      }

      console.log(the_keys)

      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: ['Total Projects','Completed','PA'],
        datasets:[
          {
            label:'WBGM',
            data: [0,1,2,0,0,4,5,6,8],
            backgroundColor:'#cccccc'
          },
          {
            label:'PPA',
            data: [0,1,2,0,0,4,5,6,8],
            backgroundColor:'#cccccc'
          },
          {
            label:the_keys[3],
            data: theYData3,
            backgroundColor:'auto'
          },
          {
            label:the_keys[4],
            data: theYData4,
            backgroundColor:'auto'
          }
        ]
      })
    })
    .catch(err => {
      console.log(err)
    })
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
        theYData1.push(parseInt(dataObj.WBGM)) //ambil data y
        theYData2.push(parseInt(dataObj.RBA)) //ambil data y
        theYData3.push(parseInt(dataObj.BRDS)) //ambil data y
        theYData4.push(parseInt(dataObj.TAD)) //ambil data y
        theXData.push(dataObj.project_status) //ambil data x
      }
      //PS: jangan lupa pake parseInt kalau datanya itu integer buat di atas

      setChartData({
        labels: theXData,
        datasets:[
          {
            label:'WBGM',
            data: theYData1,
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
          {
            label:'RBA',
            data: theYData2,
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
          {
            label:'BRDS',
            data: theYData3,
            backgroundColor:'#8bc34a'
          },
          {
            label:'TAD',
            data: theYData4,
            backgroundColor:'#b19cd9'
          }
        ]
      })
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
    </div>
  )
}

export default AuditProjects