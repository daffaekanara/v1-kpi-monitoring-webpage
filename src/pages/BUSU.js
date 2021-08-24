import React from 'react'
import BUSUEng from '../components/busu/BUSUEng'
import InputBUSU from '../components/busu/InputBUSU'
import ViewBUSU from '../components/busu/ViewBUSU'

const BUSU = () => {
    return (
        <div className='BUSU'>
            <span></span>
            <h1 className='header' style={{fontWeight: 'bold'}}>
                BU/SU ENGAGEMENT
            </h1>            
            <BUSUEng/>
            <InputBUSU/>
            <ViewBUSU/>
        </div>
    )
}

export default BUSU
