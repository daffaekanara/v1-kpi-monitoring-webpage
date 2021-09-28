import React from 'react'
import BUSUEng from '../components/busu/BUSUEng'
import InputBUSU from '../components/busu/InputBUSU'
import ViewBUSU from '../components/busu/ViewBUSU'
import InputNewBUSU from '../components/busu/InputNewBUSU'

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const BUSU = () => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <div className='BUSU'>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                BU/SU ENGAGEMENT
            </h1>            
            {(decode.role === 'Power User') ? (
    <>
    <BUSUEng/>
            <InputNewBUSU/>
            <InputBUSU/>
            <ViewBUSU/>
    </>
) : (decode.role === 'Administrator') ? (
    <>
    <BUSUEng/>
            <InputNewBUSU/>
            <InputBUSU/>
            <ViewBUSU/>
    </>
) : (
    <>
            <InputNewBUSU/>
            <InputBUSU/>
            <ViewBUSU/>
    </>
)}
        </div>
    )
}

export default BUSU
