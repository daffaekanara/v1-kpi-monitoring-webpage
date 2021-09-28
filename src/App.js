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
import HistoryPage from "./pages/HistoryPage"

import useToken from "./useToken"
import jwt from 'jwt-decode'
import jwtDecode from "jwt-decode"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header'

//chart details
import Age_group_onclick from "./components/chart_onclick/Age_group_onclick"
import Audit_exp_onclick from "./components/chart_onclick/Audit_exp_onclick"
import Audit_news_onclick from "./components/chart_onclick/Audit_news_onclick"
import Audit_projects_onclick from "./components/chart_onclick/Audit_projects_onclick"
import Budget_data_onclick from "./components/chart_onclick/Budget_data_onclick"
import BUSU_eng_onclick from "./components/chart_onclick/BUSU_eng_onclick"
import CSF_onclick from "./components/chart_onclick/CSF_onclick"
import Education_level_onclick from "./components/chart_onclick/Education_level_onclick"
import Prof_cert_onclick from "./components/chart_onclick/Prof_cert_onclick"
import SMR_cert_onclick from "./components/chart_onclick/SMR_cert_onclick"
import Staff_attrition_onclick from "./components/chart_onclick/Staff_attrition_onclick"
import Training_budget_onclick from "./components/chart_onclick/Training_budget_onclick"

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
          <div className='btn-container-logout'>
            <button className='logout-btn' onClick={Logout}>Logout</button>
          </div>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
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
            <Route path='/Age_group_details' component={Age_group_onclick}/>
              <Route path='/Audit_exp_details' component={Audit_exp_onclick}/>
              <Route path='/Audit_news_details' component={Audit_news_onclick}/>
              <Route path='/Audit_projects_details' component={Audit_projects_onclick}/>
              <Route path='/Budget_data_details' component={Budget_data_onclick}/>
              <Route path='/BUSU_eng_details' component={BUSU_eng_onclick}/>
              <Route path='/CSF_details' component={CSF_onclick}/>
              <Route path='/Education_level_details' component={Education_level_onclick}/>
              <Route path='/Prof_cert_details' component={Prof_cert_onclick}/>
              <Route path='/SMR_cert_details' component={SMR_cert_onclick}/>
              <Route path='/Staff_attrition_details' component={Staff_attrition_onclick}/>
              <Route path='/training_budget_details' component={Training_budget_onclick}/>
          </Switch>
        </BrowserRouter>
      </div>
      ) : (decode.role === 'Administrator') ? (
        <div>
          <BrowserRouter>
  <div className='website-header'>
            <Navbar/>
            <div className='btn-container-logout'>
              <button className='logout-btn' onClick={Logout}>Logout</button>
            </div>
          </div>
            <Switch>
              <Route exact path="/" component={Home}/>
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
              <Route path='/history_page' component={HistoryPage}/>
              <Route path='/Age_group_details' component={Age_group_onclick}/>
              <Route path='/Audit_exp_details' component={Audit_exp_onclick}/>
              <Route path='/Audit_news_details' component={Audit_news_onclick}/>
              <Route path='/Audit_projects_details' component={Audit_projects_onclick}/>
              <Route path='/Budget_data_details' component={Budget_data_onclick}/>
              <Route path='/BUSU_eng_details' component={BUSU_eng_onclick}/>
              <Route path='/CSF_details' component={CSF_onclick}/>
              <Route path='/Education_level_details' component={Education_level_onclick}/>
              <Route path='/Prof_cert_details' component={Prof_cert_onclick}/>
              <Route path='/SMR_cert_details' component={SMR_cert_onclick}/>
              <Route path='/Staff_attrition_details' component={Staff_attrition_onclick}/>
              <Route path='/training_budget_details' component={Training_budget_onclick}/>
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <div className='website-header'>
            <NavbarUser/>
            <div className='btn-container-logout'>
              <button className='logout-btn' onClick={Logout}>Logout</button>
            </div>
          </div>
            <Switch>
              <Route exact path="/" component={Profile}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/auditplanprogress' component={AuditPlanProgress}/>
              <Route path='/BUSU' component={BUSU}/>
              <Route path='/CSF' component={CSF}/>
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
