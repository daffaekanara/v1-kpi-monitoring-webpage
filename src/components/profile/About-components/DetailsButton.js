import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

const DetailsButton = ({ onDetailsClick }) => {
    return (
        <div>
           <Button text='Details' color='#488AC7' onClick={onDetailsClick}/> 
        </div>
    )
}

export default DetailsButton
