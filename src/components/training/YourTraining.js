import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './your-training-components/Header'
import Header2 from './your-training-components/Header2'
import Header3 from './your-training-components/Header3'
import Trainings from './your-training-components/Trainings'
import AddTraining from './your-training-components/AddTraining'
import Header4 from "./your-training-components/Header4"
import Footer from "./your-training-components/Footer"
import About from "./your-training-components/About"
import Anouncement from './your-training-components/Anouncement'

const Training = () => {

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
    const res = await fetch('http://156.67.217.91/api/training/form')
    const data = await res.json() //res.json cuma buat fake rest API BE
  
    console.log(data)
    return data
  }
  
  //add training
  const addTraining = async (training) => {
    const res = await fetch('http://156.67.217.92/api/training/form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    console.log(JSON.stringify(training))
    
    const data = await res.json()
  
    
  //  const id = Math.floor(Math.random() * 10000) + 1
  //  const newTraining = { id, ...training}
  //  setTrainings([...trainings, newTraining])
  }
  
   
  //download old certificate (masih belom bener soalnya blom ada data certificate nya)
  const downloadData = async (id) => {
    await fetch('http://156.67.217.92/api/training/form/${id}',{
      method: 'GET'
    })
  }
  
    return (
      <Router>
        <div className="container">
          <Header onAdd={() => setShowAddTraining(!showAddTraining)}
            showAdd={showAddTraining}
          />        
          <Route path='/' exact render={(props) => (
            <>
              {showAddTraining && <Anouncement/>}
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining onAdd={addTraining}/>}
              {trainings.length > 0 && <Header3/>}
            </>
          )} /> 
          <Route path='/about' component={About} />
        <Footer />
        </div>
      </Router>
    )
  }

export default Training
