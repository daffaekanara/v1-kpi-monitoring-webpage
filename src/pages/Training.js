import React from 'react'
import YourTraining from '../components/training/YourTraining'
import TrainingBudget from '../components/training/TrainingBudget'
import TrainingRealization from '../components/training/TrainingRealization'
import YourTrainingTable from '../components/training/YourTrainingTable'

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const Training = () => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)
  
  return (
    <div>
      <span></span>
      <h1 className='header-page' style={{fontWeight: 'bold'}}>
        TRAINING
      </h1>
      {(decode.role === 'Power User') ? (
    <>
    <TrainingBudget/>
      <TrainingRealization/>
      <YourTrainingTable/>
      <YourTraining/>
    </>
) : (decode.role === 'Administrator') ? (
    <>
    <TrainingBudget/>
      <TrainingRealization/>
      <YourTrainingTable/>
      <YourTraining/>
    </>
) : (
    <>
      <YourTrainingTable/>
      <YourTraining/>
    </>
)}
    </div>
  )
}

export default Training
