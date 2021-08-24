import React from 'react'
import ClientSurvey from '../components/csf/ClientSurvey'
import YourCSF from '../components/csf/YourCSF'

const CSF = () => {
    return (
        <div className='CSF'>
            <span></span>
            <h1 className='header' style={{fontWeight: 'bold'}}>
                CSF
            </h1>
            <ClientSurvey/>
            <YourCSF/>
        </div>
    )
}

export default CSF
