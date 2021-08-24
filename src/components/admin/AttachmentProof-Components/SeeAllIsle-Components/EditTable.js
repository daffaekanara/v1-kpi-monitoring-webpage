import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            staffID : '146010156',
            staffName : 'SA',
            divison : 'PPA',
            stream : 'PPA',
            corporateTitle : 'PPA Manager',
            corporateGrade : 'AVP',
            dateOfBirth : '19/11/1966',
            dateStartFirstEmployment : '06/08/1992',
            dateJoinUOB : '06/08/1992',
            dateJoinIAFunction : '06/08/1992',
            asOfNow : '09/07/2021',
            age : '55',
            gen : 'gen x',
            gender : 'M',
            auditUOBExp : '29',
            auditNonUOBExp : '0',
            totalAuditExp : '29',
            educationLevel : 'Bachelor',
            educationMajor : 'Accounting',
            educationCategory : 'Management/Economy',
            RMGCertification : 'level 3',
            CISA : false,
            CEH : false,
            ISO : false,
            CHFI : false,
            IDEA : false,
            QualifiedIA : false,
            CBIA : false,
            CIA : false,
            CPA : false,
            CA : false,
            IABackgground : true,
            EABackground : false
        },
        {
            staffID : '146010157',
            staffName : 'SA',
            divison : 'PPA',
            stream : 'PPA',
            corporateTitle : 'PPA Manager',
            corporateGrade : 'AVP',
            dateOfBirth : '19/11/1966',
            dateStartFirstEmployment : '06/08/1992',
            dateJoinUOB : '06/08/1992',
            dateJoinIAFunction : '06/08/1992',
            asOfNow : '09/07/2021',
            age : '55',
            gen : 'gen x',
            gender : 'M',
            auditUOBExp : '29',
            auditNonUOBExp : '0',
            totalAuditExp : '29',
            educationLevel : 'Bachelor',
            educationMajor : 'Accounting',
            educationCategory : 'Management/Economy',
            RMGCertification : 'level 3',
            CISA : false,
            CEH : false,
            ISO : false,
            CHFI : false,
            IDEA : false,
            QualifiedIA : false,
            CBIA : false,
            CIA : false,
            CPA : false,
            CA : false,
            IABackgground : true,
            EABackground : false
        },
        {
            staffID : '146010158',
            staffName : 'SA',
            divison : 'PPA',
            stream : 'PPA',
            corporateTitle : 'PPA Manager',
            corporateGrade : 'AVP',
            dateOfBirth : '19/11/1966',
            dateStartFirstEmployment : '06/08/1992',
            dateJoinUOB : '06/08/1992',
            dateJoinIAFunction : '06/08/1992',
            asOfNow : '09/07/2021',
            age : '55',
            gen : 'gen x',
            gender : 'M',
            auditUOBExp : '29',
            auditNonUOBExp : '0',
            totalAuditExp : '29',
            educationLevel : 'Bachelor',
            educationMajor : 'Accounting',
            educationCategory : 'Management/Economy',
            RMGCertification : 'level 3',
            CISA : false,
            CEH : false,
            ISO : false,
            CHFI : false,
            IDEA : false,
            QualifiedIA : false,
            CBIA : false,
            CIA : false,
            CPA : false,
            CA : false,
            IABackgground : true,
            EABackground : false
        },
    ]

    const columns=[
        {title:'NIK', field:'staffID'},
        {title:'Staff Name', field:'staffName'},
        {title:'Divison', field:'divison'},
        {title:'Stream', field:'stream'},
        {title:'Corporate Title', field:'corporateTitle'},
        {title:'Corporate Grade', field:'corporateGrade'},
        {title:'Date of Birth', field:'dateOfBirth'},
        {title:'Date Start First Employment', field:'dateStartFirstEmployment'},
        {title:'Date Join UOB', field:'dateJoinUOB'},
        {title:'Date Join IA Function', field:'dateJoinIAFunction'},
        {title:'As of Now', field:'asOfNow'},
        {title:'Age', field:'age'},
        {title:'Gen', field:'gen'},
        {title:'Gender', field:'gender'},
        {title:'Years of Audit Experience in UOB', field:'auditUOBExp'},
        {title:'Years of Audit Experience outside UOB', field:'auditNonUOBExp'},
        {title:'Total Audit Experience', field:'totalAuditExp'},
        {title:'Education Level', field:'educationLevel'},
        {title:'Educaiton Major', field:'educationMajor'},
        {title:'Education Category', field:'educationCategory'},
        {title:'RMG Certification', field:'RMGCertification'},
        {title:'CISA Certification', field:'CISA'},
        {title:'CEH Certification', field:'CEH'},
        {title:'ISO27001 Certification', field:'ISO'},
        {title:'CHFI Certification', field:'CHFI'},
        {title:'IDEA', field:'IDEA'},
        {title:'Qualified Internal Auditor', field:'QualifiedIA'},
        {title:'CBIA Certification', field:'CBIA'},
        {title:'CIA Certification', field:'CIA'},
        {title:'CPA Certification', field:'CPA'},
        {title:'CA Certification', field:'CA'},
        {title:'Internal Audit Background', field:'IABackgground'},
        {title:'External Audit Background', field:'EABackground'}
    ]

    return (
        <div>
            <MaterialTable
                title='QA Information'
                data={data}
                columns={columns}
                options={{
                    exportButton:true
                    }}
            />
        </div>
    )
}

export default EditTable
