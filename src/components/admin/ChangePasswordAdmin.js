import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './change_password-admin-components/Header'
import Header2 from './change_password-admin-components/Header2'
import Header3 from './change_password-admin-components/Header3'
import Trainings from './change_password-admin-components/Trainings'
import AddTraining from './change_password-admin-components/AddTraining'
import Header4 from "./change_password-admin-components/Header4"
import Footer from "./change_password-admin-components/Footer"
import About from "./change_password-admin-components/About"
import Training from './change_password-admin-components/Training'

import useToken from '../../useToken'
import jwt from 'jwt-decode'

const ChangePasswordAdmin = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const [showAddTraining, setShowAddTraining] = useState(false)
    const [trainings, setTrainings] = useState([])
    const [data, setData] = useState([])
    const [notif, setNotif] = useState('')
    const [notifText, setNotifText] = useState('')
  
    useEffect(() => {
      const getTrainings = async () => {
        const trainingsFromServer = await fetchTrainings()
        setTrainings(trainingsFromServer)
      }
      getTrainings()
    }, []) //empty array [] for user atau yg lainnya
  
  //fetch Trainings
  const fetchTrainings = async (e) => {
    fetch('http://156.67.217.91/api/admin/change_password')
      .then(resp => {resp.json()})
      .then((result) => {
				console.log(result.detail);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

      console.log(data)
    }

  
  //add training
  const addTraining = async (training) => {
    const res = await fetch('http://103.200.4.18:8181/api/admin/change_password', {
      method: 'POST',
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
              {showAddTraining && <Header2/>}
              {showAddTraining && <AddTraining onAdd={addTraining}/>}
              {showAddTraining && <h1 className='header'>{notifText}</h1>}
          
            </>
          )} /> 
          </div>
      </Router>
    )
  }

export default ChangePasswordAdmin
