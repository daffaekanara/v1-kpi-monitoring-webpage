import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../Button'


const Header = ({ title, onEditClick, onDownloadClick, onUploadClick }) => {

    return (
        <header className='edit-data-header'>
            <h1>Audit News</h1>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Button color='#777777' text='Edit' onClick={onEditClick}/>
            <Button color='#3cb065' text='Upload DB' onClick={onUploadClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Budget'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
