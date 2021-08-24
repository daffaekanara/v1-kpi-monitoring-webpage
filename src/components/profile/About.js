import React from 'react'
import Profpic from './daffa.jpg'
import Button from '../Button'
import EditDetailsData from './About-components/EditDetailsData'

//user data
import useToken from '../../useToken'
import jwt from 'jwt-decode'

const About = ({ onDetailsClick }) => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <>
            <div className='about'>
                <form method=''>
                    <div className='row'>
                        <div>
                            <h2>{decode.name}</h2>
                           <h3 style={{color:'#408CE4'}}>{decode.div} Division</h3>
                           <h5 style={{color:'#7c7c7c'}}>NIK: {decode.nik}</h5>
                        </div>
                    </div>
                </form>
                <EditDetailsData/>
            </div>

        </>
    )
}

export default About