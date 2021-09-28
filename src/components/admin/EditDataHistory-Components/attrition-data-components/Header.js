import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../Button'


const Header = ({ title, onEditClick, onDownloadClick, onUploadClick }) => {

    return (
        <header className='edit-data-header'>
            <h1>Staff Attrition</h1>
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
            <Button color='#777777' text='Table' onClick={onEditClick}/>
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
