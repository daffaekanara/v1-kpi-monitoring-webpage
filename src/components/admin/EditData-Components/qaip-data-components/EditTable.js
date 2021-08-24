import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            plan : 'Regulatory',
            auditProject : 'Distributed System',
            TL : 'D',
            divisionHead : 'CC',
            result : 'Generally Conforms',
            category : 'Completeness, Clarity',
            stage : 'Planning, Fieldwork',
            deliverable : 'APD, WP, Audit Report',
            noOfIssues : 3,
            QASample : true
        },
        {
            id : '2',
            plan : 'Thematic',
            auditProject : 'Distributed System',
            TL : 'D',
            divisionHead : 'CC',
            result : 'Generally Conforms',
            category : 'Completeness, Clarity',
            stage : 'Planning, Fieldwork',
            deliverable : 'APD, WP, Audit Report',
            noOfIssues : 3,
            QASample : true
        },
        {
            id : '3',
            plan : 'Thematic',
            auditProject : 'Distributed System',
            TL : 'D',
            divisionHead : 'CC',
            result : 'Generally Conforms',
            category : 'Completeness, Clarity',
            stage : 'Planning, Fieldwork',
            deliverable : 'APD, WP, Audit Report',
            noOfIssues : 3,
            QASample : false
        }
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Plan', field:'plan'},
        {title:'Audit Project', field:'auditProject'},
        {title:'Team Leader', field:'TL'},
        {title:'Divison Head', field:'divisionHead'},
        {title:'QA Grading - Result', field:'result'},
        {title:'QA Grading - Result (Category)', field:'category'},
        {title:'QA Grading - Result (Stage)', field:'stage'},
        {title:'QA Grading - Result (deliverables)', field:'deliverable'},
        {title:'No. of Issue(s)', field:'noOfIssues'},
        {title:'QA Sample', field:'QASample'}
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
