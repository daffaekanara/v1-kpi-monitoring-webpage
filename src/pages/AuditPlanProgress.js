import React from 'react'
import AuditProjects from '../components/auditpp/AuditProjects'
import UploadPACompletion from '../components/admin/EditData-Components/audit-project-components/UploadPACompletion'
import EditStatusProject from '../components/auditpp/EditStatusProject';

//user data
import useToken from '../useToken';
import jwt from 'jwt-decode'

const AuditPlanProgress = () => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    return (
        <div className='audit-plan-progres'>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                AUDIT PROJECTS
            </h1>
            {(decode.role === 'Power User') ? (
                <>
                <AuditProjects/>
                <UploadPACompletion/>
                <EditStatusProject/>
                </>
            ) : (decode.role === 'Administrator') ? (
                <>
                <AuditProjects/>
                <UploadPACompletion/>
                <EditStatusProject/>
                </>
            ) : (
                <>
                <UploadPACompletion/>
                <EditStatusProject/>
                </>
            )}

        </div>
    )
}

export default AuditPlanProgress
