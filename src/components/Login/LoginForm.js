import React, { useState, dispatch, actions } from 'react'
import Button from '../Button'
import axios from 'axios'
import PropTypes from 'prop-types'
import jwt from 'jwt-decode'

async function loginUser(credentials) {
    return fetch('http://103.200.4.18:8181/auth/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const LoginForm = ({ setToken }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')
    

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        })
        setToken(token)
        setError('Incorrect email or password.')
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='login-form-title'>
                <h1 style={{color:'#1261a0'}} className='header'>WELCOME TO IA DASHBOARD</h1>
                <div className='login-container'>
                    <div className='login-form-group'>
                        <label htmlFor='email'>Email: </label>
                        <input type='email'
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='login-form-group'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button type='submit' color={'#528aae'} 
                text={'Login'}
                        />
                    </div>
                </div>
            </div>
        </form>
        <h1 className='header'>{error}</h1>
        </div>
    )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default LoginForm
