import React from 'react'
import EditEmployeeData from './EditData-Components/EditEmployeeData'
import EditBudgetData from './EditData-Components/EditBudgetData'
import EditTraingData from './EditData-Components/EditTraingData'
import EditAuditProjectData from './EditData-Components/EditAuditProjectData'
import EditBUSUData from './EditData-Components/EditBUSUData'
import EditAuditContributionData from './EditData-Components/EditAuditContributionData'
import EditAttritionData from './EditData-Components/EditAttritionData'
import EditCSFData from './EditData-Components/EditCSFData'
import EditQAIPData from './EditData-Components/EditQAIPData'

const EditData = () => {
    return (
        <div>
            <div className="header">
                <h1>Edit Data</h1>
            </div>
            <EditEmployeeData/>
            <EditBudgetData/>
            <EditTraingData/>
            <EditAuditProjectData/>
            <EditAuditContributionData/>
            <EditAttritionData/>
            <EditCSFData/>
            <EditQAIPData/>
            <EditBUSUData/>
        </div>
    )
}

export default EditData
