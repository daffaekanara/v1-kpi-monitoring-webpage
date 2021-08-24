import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../Button'


const Header = ({ title, onEditClick, onDownloadClick, onUploadClick }) => {

    return (
        <header className='edit-data-header'>
            <h1>{title}</h1>
            <span></span>
            <Button color='#777777' text='Edit' onClick={onEditClick}/>
            <Button color='#528aae' text='Upload Certificate' onClick={onDownloadClick}/>
            <Button color='#3cb065' text='Upload DB' onClick={onUploadClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Data Employee'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
