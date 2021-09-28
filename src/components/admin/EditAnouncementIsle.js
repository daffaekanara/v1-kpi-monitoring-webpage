import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './edit-anouncement-isle-components/Header'
import Header2 from './edit-anouncement-isle-components/Header2'
import Header3 from './edit-anouncement-isle-components/Header3'
import Trainings from './edit-anouncement-isle-components/Trainings'
import AddTraining from './edit-anouncement-isle-components/AddTraining'
import Header4 from "./edit-anouncement-isle-components/Header4"
import Footer from "./edit-anouncement-isle-components/Footer"
import About from "./edit-anouncement-isle-components/About"
import Training from './edit-anouncement-isle-components/Training'
import Anouncement from '../training/your-training-components/Anouncement'

const EditAnouncementIsle = () => {

    const [showAddTraining, setShowAddTraining] = useState(false)
    const [trainings, setTrainings] = useState([])
  
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
    const res = await fetch('http://156.67.217.92/api/admin/training_announcement_form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    console.log(training)
    
    const data = await res.json()
  
    
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
          <Route path='/adminpage' exact render={(props) => (
            <>
              {showAddTraining && <Anouncement/>}
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining onAdd={addTraining}/>}
          
            </>
          )} /> 
          </div>
      </Router>
    )
  }

export default EditAnouncementIsle
