import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Input-New-BUSU-Components/Header'
import Header2 from './Input-New-BUSU-Components/Header2'
import Header3 from './Input-New-BUSU-Components/Header3'
import Trainings from './Input-New-BUSU-Components/Trainings'
import AddTraining from './Input-New-BUSU-Components/AddTraining'
import Header4 from "./Input-New-BUSU-Components/Header4"
import Footer from "./Input-New-BUSU-Components/Footer"
import About from "./Input-New-BUSU-Components/About"

const InputNewBUSU = () => {

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
    const res = await fetch('http://103.200.4.18:8181/api/engagement/input_form')
    const data = await res.json() //res.json cuma buat fake rest API BE
  
    console.log(data)
    return data
  }
  
  //add training
  const addTraining = async (training) => {
    const res = await fetch('http://103.200.4.18:8181/api/engagement/input_form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    console.log(JSON.stringify(training))
  
  
    
  //  const id = Math.floor(Math.random() * 10000) + 1
  //  const newTraining = { id, ...training}
  //  setTrainings([...trainings, newTraining])
  }
  
   
  //download old certificate (masih belom bener soalnya blom ada data certificate nya)
  const downloadData = async (id) => {
    await fetch('http://103.200.4.18:8181/api/training/form/${id}',{
      method: 'GET'
    })
  }
  
    return (
      <Router>
        <div className="container">
          <Header onAdd={() => setShowAddTraining(!showAddTraining)}
            showAdd={showAddTraining}
          />        
          <Route path='/BUSU' exact render={(props) => (
            <>
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining/>}
              {trainings.length > 0 && <Header3/>}
            </>
          )} /> 
          </div>
      </Router>
    )
  }

export default InputNewBUSU
