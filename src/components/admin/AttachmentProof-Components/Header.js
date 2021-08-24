import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'


const Header = ({ title, onEditDataClick, onDownloadClick, onSeeAllClick }) => {

    return (
        <div>
        <header className='header'>
            <h1>Attachment Proof</h1>
        </header>
        <header className='edit-data-header'>
            <Button color='#777777' text='Edit Data' onClick={onEditDataClick}/>
            <Button color='#3cb065' text='See All' onClick={onSeeAllClick}/>
        </header>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
