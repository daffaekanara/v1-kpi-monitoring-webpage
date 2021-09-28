import React, { useState } from 'react'
import Header from './audit-contribution-components/Header'
import EditIsle from './audit-contribution-components/EditIsle'
import DownloadIsle from './audit-contribution-components/DownloadIsle'
import UploadIsle from './audit-contribution-components/UploadIsle'
import HistoryEditIsle from './audit-contribution-components/HistoryEditIsle'

const EditAuditContributionData = () => {

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

export default EditAuditContributionData
