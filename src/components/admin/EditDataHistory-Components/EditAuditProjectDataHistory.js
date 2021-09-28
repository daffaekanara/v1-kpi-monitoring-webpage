import React, { useState } from 'react'
import Header from './audit-project-components/Header'
import EditIsle from './audit-project-components/EditIsle'
import UploadPACompletion from './audit-project-components/UploadPACompletion'
import UploadIsle from './audit-project-components/UploadIsle'
import HistoryEditIsle from './audit-project-components/HistoryEditIsle'

const EditEmployeeData = () => {

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
            {showDownloadIsle && <UploadPACompletion />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditEmployeeData
