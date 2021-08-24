import React, { useState } from 'react'
import TotalJoin from '../components/attrition/TotalJoin'
import AttritionRate from '../components/attrition/AttritionRate'

const Attrition = () => {

    return (
        <div>
            <span></span>
            <h1 className='header' style={{fontWeight: 'bold'}}>
                STAFF ATTRITION
            </h1>          
            <TotalJoin/>
            <AttritionRate/>
        </div>
    )
}

export default Attrition
