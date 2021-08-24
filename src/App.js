import { useState } from "react"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import NavbarUser from "./components/navbar/NavbarUser"
import NavbarPower from "./components/navbar/NavbarPower"
import { Router } from "react-router-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Attrition from "./pages/Attrition"
import AuditPlanProgress from "./pages/AuditPlanProgress"
import Budget from "./pages/Budget"
import BUSU from "./pages/BUSU"
import CSF from "./pages/CSF"
import Help from "./pages/Help"
import Training from "./pages/Training"
import LoginForm from "./components/Login/LoginForm"
import AdminPage from "./pages/AdminPage"
import QAResults from "./pages/QAResults"
import Contribute from "./pages/Contribute"
import useToken from "./useToken"
import jwt from 'jwt-decode'
import jwtDecode from "jwt-decode"

const App = () => {

  const { token, setToken } = useToken()

  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

  if(!token) {
    return <LoginForm setToken={setToken}/>
  }

  const Logout = () => {
    setToken('')
  }
  

  return (
    <div className='App'>
      {(decode.role === 'Power User') ? (
        <div>
        <BrowserRouter>
        <div className='website-header'>
          <NavbarPower/>
          <div className='btn-container'>
            <button className='logout-btn' onClick={Logout}>Logout</button>
          </div>
        </div>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/attrition' component={Attrition}/>
            <Route path='/auditplanprogress' component={AuditPlanProgress}/>
            <Route path='/budget' component={Budget}/>
            <Route path='/BUSU' component={BUSU}/>
            <Route path='/CSF' component={CSF}/>
            <Route path='/help' component={Help}/>
            <Route path='/training' component={Training}/>
            <Route path='/qaresults' component={QAResults}/>
            <Route path='/contribute' component={Contribute}/>
          </Switch>
        </BrowserRouter>
      </div>
      ) : (decode.role === 'Administrator') ? (
        <div>
          <BrowserRouter>
          <div className='website-header'>
            <Navbar/>
            <div className='btn-container'>
              <button className='logout-btn' onClick={Logout}>Logout</button>
            </div>
          </div>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/attrition' component={Attrition}/>
              <Route path='/auditplanprogress' component={AuditPlanProgress}/>
              <Route path='/budget' component={Budget}/>
              <Route path='/BUSU' component={BUSU}/>
              <Route path='/CSF' component={CSF}/>
              <Route path='/help' component={Help}/>
              <Route path='/training' component={Training}/>
              <Route path='/adminpage' component={AdminPage}/>
              <Route path='/qaresults' component={QAResults}/>
              <Route path='/contribute' component={Contribute}/>
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <div className='website-header'>
            <NavbarUser/>
            <div className='btn-container'>
              <button className='logout-btn' onClick={Logout}>Logout</button>
            </div>
          </div>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/auditplanprogress' component={AuditPlanProgress}/>
              <Route path='/BUSU' component={BUSU}/>
              <Route path='/help' component={Help}/>
              <Route path='/training' component={Training}/>
              <Route path='/contribute' component={Contribute}/>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  )
}

export default App;
