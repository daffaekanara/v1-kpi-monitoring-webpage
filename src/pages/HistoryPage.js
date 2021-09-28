import React from 'react'
import EditDataHistory from '../components/admin/EditDataHistory'
import DivisionMasterTableHistory from '../components/admin/DivisionMasterTableHistory'
import ChangeYearHistory from '../components/admin/ChangeYearHistory'

const HistoryPage = () => {
    return (
        <div>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                HISTORY PAGE
            </h1>
            <div className='container'>
                <ChangeYearHistory/>
            </div>
            <div>
                <EditDataHistory/>
            </div>
            <div className='container'>
                <DivisionMasterTableHistory/>
            </div>
        </div>
    )
}

export default HistoryPage
