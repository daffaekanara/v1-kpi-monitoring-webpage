import React, { useState } from 'react'
import Header from './busu-data-components/Header'
import EditIsle from './busu-data-components/EditIsle'
import DownloadIsle from './busu-data-components/DownloadIsle'
import UploadIsle from './busu-data-components/UploadIsle'

const EditBUSUData = () => {

    const [showEditIsle, setShowEditIsle] = useState(false)
    const [showDownloadIsle, setShowDownloadIsle] = useState(false)
    const [showUploadIsle, setShowUploadIsle] = useState(false)


    return (
        <div className='edit-data-container'>
            <Header 
            onEditClick={() => 
                {setShowEditIsle(!showEditIsle)
                setShowDownloadIsle(false)
                setShowUploadIsle(false)
            }}
            onDownloadClick={() => 
                {setShowEditIsle(false)
                setShowDownloadIsle(!showDownloadIsle)
                setShowUploadIsle(false)
            }}
            onUploadClick={() => 
                {setShowEditIsle(false)
                setShowDownloadIsle(false)
                setShowUploadIsle(!showUploadIsle)
            }}
            />
            {showEditIsle && <EditIsle />}
            {showDownloadIsle && <DownloadIsle />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditBUSUData
