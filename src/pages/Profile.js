import React from 'react'
import About from '../components/profile/About';
import DataChartTrainings from "../components/profile/DataChartTrainings";
import HeaderTrainings from "../components/profile/HeaderTrainings";
import EmployeeCertification from '../components/profile/EmployeeCertification';
import ChangePassword from '../components/profile/ChangePassword';
import UploadOtherCert from '../components/profile/UploadOtherCert';
import YourCertificationDownload from '../components/profile/YourCertificationDownload';
import DownloadCertNew from '../components/profile/DownloadCertNew';

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
              <h1 className='header-page' style={{fontWeight: 'bold'}}>
                YOUR PROFILE
             </h1>
          <div className='container'>
            <About/>
            <span></span>
            <HeaderTrainings/>
            <DataChartTrainings/>
            <EmployeeCertification/>
            <UploadOtherCert/>
            <DownloadCertNew/>
            <ChangePassword/>
        </div>
      </div>
    )
}

export default Profile
