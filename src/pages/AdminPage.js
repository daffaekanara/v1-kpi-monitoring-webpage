import React from 'react'
import MaintananceBtn from '../components/admin/MaintananceBtn'
import EditData from '../components/admin/EditData'
import EditAnouncement from '../components/admin/EditAnouncement'
//import AttachmentProof from '../components/admin/AttachmentProof'
//import TableTesting from '../components/admin/TableTesting'

const AdminPage = () => {
    return (
        <div>
            <span></span>
            <h1 className='header' style={{fontWeight: 'bold'}}>
                ADMIN PAGE
            </h1>
            <div className='container'>
                <MaintananceBtn/>
                <EditData/>
            </div>
            <div className='container'>
                <EditAnouncement/>
            </div>
        </div>
    )
}

export default AdminPage
