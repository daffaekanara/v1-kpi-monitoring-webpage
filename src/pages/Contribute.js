import React from 'react'
import ContributeAudit from '../components/busu/ContributeAudit'
import InputNews from '../components/busu/InputNews'

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const Contribute = () => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <div>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                AUDIT NEWS/ BULLETIN/ MyUOB
            </h1>
            {(decode.role === 'Power User') ? (
    <>
    <ContributeAudit/>
            <InputNews/>
    </>
) : (decode.role === 'Administrator') ? (
    <>
    <ContributeAudit/>
            <InputNews/>
    </>
) : (
    <>
            <InputNews/>
    </>
)}
        </div>
    )
}

export default Contribute
