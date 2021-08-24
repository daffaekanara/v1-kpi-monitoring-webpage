import React, { useState } from 'react'
import Header from './AttachmentProof-Components/Header'
import EditDataIsle from './AttachmentProof-Components/EditDataIsle'
import SeeAllIsle from './AttachmentProof-Components/SeeAllIsle'

const AttachmentProof = () => {

    const [showSeeAllIsle, setShowSeeAllIsle] = useState(false)
    const [showEditDataIsle, setShowEditDataIsle] = useState(false)

    return (
        <div className='edit-data-container'>
            <Header 
            onEditDataClick={() => 
                {setShowEditDataIsle(!showEditDataIsle)
                setShowSeeAllIsle(false)
            }}
            onSeeAllClick={() => 
                {setShowEditDataIsle(false)
                setShowSeeAllIsle(!showSeeAllIsle)
            }}
            />
            {showEditDataIsle && <EditDataIsle />}
            {showSeeAllIsle && <SeeAllIsle />}
        </div>
    )
}

export default AttachmentProof
