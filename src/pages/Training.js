import React from 'react'
import YourTraining from '../components/training/YourTraining'
import TrainingBudget from '../components/training/TrainingBudget'
import TrainingRealization from '../components/training/TrainingRealization'
import YourTrainingTable from '../components/training/YourTrainingTable'

const Training = () => {
  return (
    <div>
      <span></span>
      <h1 className='header' style={{fontWeight: 'bold'}}>
        TRAINING
      </h1>
      <TrainingBudget/>
      <TrainingRealization/>
      <YourTrainingTable/>
      <YourTraining/>
    </div>
  )
}

export default Training
