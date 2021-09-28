import React, { useState } from 'react'
import Header from './employee-data-components/Header'
import EditIsle from './employee-data-components/EditIsle'
import EmployeeCertification from './employee-data-components/EmployeeCertification'
import EmployeeCertificationDownload from './employee-data-components/EmployeeCertificationDownload'
import UploadOtherCertAdmin from './employee-data-components/UploadOtherCertAdmin'
import UploadIsle from './employee-data-components/UploadIsle'
import EmployeeCertification2 from './employee-data-components/EmployeeCertification2'
import HistoryEditIsle from './employee-data-components/HistoryEditIsle'

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
            {showEditIsle && <EditIsle />}
            {showDownloadIsle && <EmployeeCertification />}
            {showDownloadIsle && <UploadOtherCertAdmin />}
            {showUploadIsle && <EmployeeCertificationDownload />}
        </div>
    )
}

export default EditEmployeeData
