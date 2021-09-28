import React, { useState } from 'react'
import TotalJoin from '../components/attrition/TotalJoin'
import AttritionRate from '../components/attrition/AttritionRate'
import AttritionRateBar from '../components/attrition/AttritionRateBar'
import AttritionAutoGenerate from '../components/attrition/AttritionAutoGenerate'

const Attrition = () => {

    return (
        <div>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                STAFF ATTRITION
            </h1>          
            <TotalJoin/>
            <AttritionAutoGenerate/>
        </div>
    )
}

export default Attrition
