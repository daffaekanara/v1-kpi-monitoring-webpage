import React, { useState } from 'react'
import Header from './csf-data-components/Header'
import EditIsle from './csf-data-components/EditIsle'
import DownloadIsle from './csf-data-components/DownloadIsle'
import UploadIsle from './csf-data-components/UploadIsle'
import HistoryEditIsle from './csf-data-components/HistoryEditIsle'

const EditCSFData = () => {

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
            {showEditIsle && <HistoryEditIsle />}
            {showDownloadIsle && <DownloadIsle />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditCSFData
