import React from 'react'
import ClientSurvey from '../components/csf/ClientSurvey'
import YourCSF from '../components/csf/YourCSF'

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const CSF = () => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <div className='CSF'>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                CSF
            </h1>
            {(decode.role === 'Power User') ? (
    <>
    <ClientSurvey/>
            <YourCSF/>
    </>
) : (decode.role === 'Administrator') ? (
    <>
    <ClientSurvey/>
            <YourCSF/>
    </>
) : (
    <>
            <YourCSF/>
    </>
)}
        </div>
    )
}

export default CSF
