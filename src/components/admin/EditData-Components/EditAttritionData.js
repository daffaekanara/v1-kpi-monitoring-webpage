import React, { useState } from 'react'
import Header from './attrition-data-components/Header'
import EditIsle from './attrition-data-components/EditIsle'
import DownloadIsle from './attrition-data-components/DownloadIsle'
import UploadIsle from './attrition-data-components/UploadIsle'
import DetailsTable from './attrition-data-components/DetailsTable'
import DetailsTable2 from './attrition-data-components/DetailsTable2'
import HistoryEditIsle from './attrition-data-components/HistoryEditIsle'
import DetailsTableHistory from './attrition-data-components/DetailsTableHistory'
import DetailsTable2History from './attrition-data-components/DetailsTable2History'

const EditAttritionData = () => {

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
            {showEditIsle && <DetailsTable2 />}
            {showEditIsle && <DetailsTable />}
            {showDownloadIsle && <DownloadIsle />}
            {showUploadIsle && <UploadIsle />}
        </div>
    )
}

export default EditAttritionData
