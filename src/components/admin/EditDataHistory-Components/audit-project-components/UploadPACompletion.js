import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './upload-PA-completion-components/Header'
import Header2 from './upload-PA-completion-components/Header2'
import AddTraining from './upload-PA-completion-components/AddTraining'
import Footer from "./upload-PA-completion-components/Footer"
import About from "./upload-PA-completion-components/About"
import Training from '../employee-data-components/employee-certification-components/Training'

const UploadPACompletion = () => {

    const [showAddTraining, setShowAddTraining] = useState(false)
    const [trainings, setTrainings] = useState([])
    const [notifText, setNotifText] = useState('')
  
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
    .then((response) => response.json())
			.then((result) => {
				setNotifText(result.detail);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    
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
          <Route path='/auditplanprogress' exact render={(props) => (
            <>
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining/>}
            </>
          )} /> 
          </div>
      </Router>
    )
  }

export default UploadPACompletion
