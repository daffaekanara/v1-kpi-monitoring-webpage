import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './merge_division-components/Header'
import Header2 from './merge_division-components/Header2'
import Header3 from './merge_division-components/Header3'
import Trainings from './merge_division-components/Trainings'
import AddTraining from './merge_division-components/AddTraining'
import Header4 from "./merge_division-components/Header4"
import Footer from "./merge_division-components/Footer"
import About from "./merge_division-components/About"
import Anouncement from './merge_division-components/Anouncement'

const MergeDivision = () => {

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
    const res = await fetch('http://103.200.4.18:8181/api/training/form')
    const data = await res.json() //res.json cuma buat fake rest API BE
  
    console.log(data)
    return data
  }
  
  //add training
  const addTraining = async (training) => {
    const res = await fetch('http://103.200.4.18:8181/api/training/form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    console.log(JSON.stringify(training))
    
    //const data = await res.json()

    //setTrainings([...trainings, data])
  
    
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
          <Route path='/adminpage' exact render={(props) => (
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

export default MergeDivision
