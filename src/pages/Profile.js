import React from 'react'
import About from '../components/profile/About';
import DataChartTrainings from "../components/profile/DataChartTrainings";
import HeaderTrainings from "../components/profile/HeaderTrainings";
import EmployeeCertification from '../components/profile/EmployeeCertification';

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const Profile = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <div>
            <span></span>
              <h1 className='header' style={{fontWeight: 'bold'}}>
                YOUR PROFILE
             </h1>
          <div className='container'>
            <About/>
            <span></span>
            <HeaderTrainings/>
            <DataChartTrainings/>
            <EmployeeCertification/>
        </div>
      </div>
    )
}

export default Profile
