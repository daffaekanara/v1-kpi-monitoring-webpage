import React, { useState } from 'react'
import Header from './qaip-data-components/Header'
import EditIsle from './qaip-data-components/EditIsle'
import DownloadIsle from './qaip-data-components/DownloadIsle'
import UploadIsle from './qaip-data-components/UploadIsle'
import InputQA from './qaip-data-components/InputQA'
import HistoryEditIsle from './qaip-data-components/HistoryEditIsle'

const EditQAIPData = () => {

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
            {showDownloadIsle && <InputQA />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditQAIPData
