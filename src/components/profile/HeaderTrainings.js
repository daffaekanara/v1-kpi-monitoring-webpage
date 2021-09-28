import React, { useState, useEffect} from 'react'
import axios from 'axios'

//user data
import useToken from '../../useToken'
import jwt from 'jwt-decode'

const HeaderTrainings = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)
    
    const [posts, setPosts] = useState([])

    //setting year
    const newDate = new Date()
    const year = newDate.getFullYear()

    //API modification
    const base_link = 'http://156.67.217.92/api/profile/header_training'
    const link = (base_link + '/' + decode.nik + '/' + year)

  useEffect(() => {
    axios.get(link)
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[] )

  return (
    <div className='header'>
      <h3> trainings: </h3>
      <span></span>
      {posts.map(post => <h3 key={post.id}>{post.training_done}</h3>)}

    </div>
  )
}

export default HeaderTrainings
