import React, { useState } from 'react'
import Header from './budget-data-components/Header'
import EditIsle from './budget-data-components/EditIsle'
import DownloadIsle from './budget-data-components/DownloadIsle'
import UploadIsle from './budget-data-components/UploadIsle'
import HistoryEditIsle from './budget-data-components/HistoryEditIsle'

const EditBudgetData = () => {

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

export default EditBudgetData
