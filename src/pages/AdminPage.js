import React from 'react'
import MaintananceBtn from '../components/admin/MaintananceBtn'
import EditData from '../components/admin/EditData'
import EditAnouncement from '../components/admin/EditAnouncement'
import EditAnouncementIsle from '../components/admin/EditAnouncementIsle'
import ChangePasswordAdmin from '../components/admin/ChangePasswordAdmin'
import DivisionMasterTable from '../components/admin/DivisionMasterTable'
import MergeDivision from '../components/admin/MergeDivision'
import ChangeYearHistory from '../components/admin/ChangeYearHistory'
import DivisionMasterTableHistory from '../components/admin/DivisionMasterTableHistory'
import TestingDownloadPDF from '../components/admin/TestingDownloadPDF'
//import AttachmentProof from '../components/admin/AttachmentProof'
//import TableTesting from '../components/admin/TableTesting'

const AdminPage = () => {
    return (
        <div>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                ADMIN PAGE
            </h1>
            <div>
                <EditData/>
            </div>
            <div className='container'>
                <EditAnouncementIsle/>
            </div>
            <div className='container'>
                <ChangePasswordAdmin/>
            </div>
            <div className='container'>
                <MergeDivision/>
            </div>
            <div className='container'>
                <DivisionMasterTable/>
            </div>
            <div className='container'>
                <ChangeYearHistory/>
            </div>
        </div>
    )
}

export default AdminPage
