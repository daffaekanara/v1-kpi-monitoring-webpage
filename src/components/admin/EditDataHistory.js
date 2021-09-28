import React from 'react'
import EditEmployeeDataHistory from './EditDataHistory-Components/EditEmployeeDataHistory'
import EditBudgetDataHistory from './EditDataHistory-Components/EditBudgetDataHistory'
import EditTraingDataHistory from './EditDataHistory-Components/EditTraingDataHistory'
import EditAuditProjectDataHistory from './EditDataHistory-Components/EditAuditProjectDataHistory'
import EditBUSUDataHistory from './EditDataHistory-Components/EditBUSUDataHistory'
import EditAuditContributionDataHistory from './EditDataHistory-Components/EditAuditContributionDataHistory'
import EditAttritionDataHistory from './EditDataHistory-Components/EditAttritionDataHistory'
import EditCSFDataHistory from './EditDataHistory-Components/EditCSFDataHistory'
import EditQAIPDataHistory from './EditDataHistory-Components/EditQAIPDataHistory'

const EditDataHistory = () => {
    return (
        <div>
            <EditEmployeeDataHistory/>
            <EditBudgetDataHistory/>
            <EditTraingDataHistory/>
            <EditAuditProjectDataHistory/>
            <EditAuditContributionDataHistory/>
            <EditAttritionDataHistory/>
            <EditCSFDataHistory/>
            <EditQAIPDataHistory/>
            <EditBUSUDataHistory/>
        </div>
    )
}

export default EditDataHistory
