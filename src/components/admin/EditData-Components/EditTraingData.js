import React, { useState } from 'react'
import Header from './training-data-components/Header'
import EditIsle from './training-data-components/EditIsle'
import AdminTraining from './training-data-components/AdminTraining'
import UploadIsle from './training-data-components/UploadIsle'

const EditTrainingData = () => {

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
            {showDownloadIsle && <AdminTraining />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditTrainingData
