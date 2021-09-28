import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './download-certificate-components/Header'
import Header2 from './download-certificate-components/Header2'
import AddTraining from './download-certificate-components/AddTraining'
import Footer from "./download-certificate-components/Footer"
import Training from './download-certificate-components/Training'

const YourCertificationDownload = () => {

    const [showAddTraining, setShowAddTraining] = useState(false)
    const [trainings, setTrainings] = useState([])
    const [image, setImage] = useState('')

    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      const getTrainings = async () => {
        const trainingsFromServer = await fetchTrainings()
        setTrainings(trainingsFromServer)
      }
      getTrainings()
    }, []) //empty array [] for user atau yg lainnya
  
  //fetch Trainings
  const fetchTrainings = async () => {
    const res = await fetch('https://app-kpi-dashboard-backend-dev.herokuapp.com/training/')
    const data = await res.json() //res.json cuma buat fake rest API BE
  
    console.log(data)
    return data
  }
  
  //add training
  const addTraining = async (training) => {
    const res = await fetch('https://app-kpi-dashboard-backend-dev.herokuapp.com/training/', {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    console.log(JSON.stringify(training))
    
    const data = await res.json()
  
    setTrainings([...trainings, data])
  
    
  //  const id = Math.floor(Math.random() * 10000) + 1
  //  const newTraining = { id, ...training}
  //  setTrainings([...trainings, newTraining])
  }
  
   
  //download old certificate (masih belom bener soalnya blom ada data certificate nya)
  const downloadData = async (id) => {
    await fetch('https://app-kpi-dashboard-backend-dev.herokuapp.com/training/${id}',{
      method: 'GET'
    })
  }
  
    return (
      <Router>
        <div className="container">
          <Header onAdd={() => setShowAddTraining(!showAddTraining)}
            showAdd={showAddTraining}
          />        
          <Route path='/Profile' exact render={(props) => (
            <>
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining/>}
            </>
          )} /> 
          <Route path='/' exact render={(props) => (
            <>
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining/>}
            </>
          )} /> 
          </div>
      </Router>
    )
  }

export default YourCertificationDownload
