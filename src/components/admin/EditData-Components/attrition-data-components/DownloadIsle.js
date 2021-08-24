import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

const DownloadIsle = () => {
    return (
        <div>
            <div className='header'>
                <BiCheckCircle size='150px' color='#6faa63'/>
            </div>
            <div className='header'>
                <h1>File Has Been downloaded.</h1>
            </div>
        </div>
    )
}

export default DownloadIsle
