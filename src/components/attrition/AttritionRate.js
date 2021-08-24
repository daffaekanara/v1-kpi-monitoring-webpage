import React from 'react'
import WBGMRate from './WBGMRate'
import RBARate from './RBARate'
import BRDSRate from './BRDSRate'
import TADRate from './TADRate'
import PPARate from './PPARate'

const AttritionRate = () => {
  return (
    <div className='container'>
      <h1 className='header'>Attrition Rate</h1>
      <span></span>
      <div className='attrition-chart'>
        <div className='body'>
          <h3 className='header'>WBGM</h3>
          <WBGMRate/>
        </div>
        <span></span>
        <div className='body'>
          <h3 className='header'>RBA</h3>
          <RBARate/>
        </div>
        <span></span>
        <div className='body'>
          <h3 className='header'>BRDS</h3>
          <BRDSRate/>
        </div>
        <span></span>
        <div className='body'>
          <h3 className='header'>TAD</h3>
          <TADRate/>
        </div>
        <span></span>
        <div className='body'>
          <h3 className='header'>PPA</h3>
          <PPARate/>
        </div>
      </div>
    </div>
  )
}

export default AttritionRate
