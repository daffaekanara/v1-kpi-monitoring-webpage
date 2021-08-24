import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            auditPlan : 'BI Payments System - Operations',
            division : 'BRDS',
            status : 'Completed',
            GRC : '',
            useOfDA : true,
            year : 2021
        },
        {
            id : '2',
            auditPlan : 'BI Payments System - Security',
            division : 'IT',
            status : 'Completed',
            GRC : '',
            useOfDA : false,
            year : 2021
        },
        {
            id : '3',
            auditPlan : 'Corporate Banking',
            division : 'WBGM',
            status : 'Completed',
            GRC : '',
            useOfDA : true,
            year : 2021
        },
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'2021 Audit Plan', field:'auditPlan'},
        {title:'Audit Division', field:'division'},
        {title:'Status', field:'status'},
        {title:'GRC', field:'GRC'},
        {title:'Use of DA', field:'useOfDA'},
        {title:'Year', field:'year'}
    ]

    return (
        <div>
            <MaterialTable
                title='QA Information'
                data={data}
                columns={columns}
                options={{
                    exportButton:true,
                }}
            />
        </div>
    )
}

export default EditTable
