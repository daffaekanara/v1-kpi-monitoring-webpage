import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            division : 'PPA',
            category : 'Audit Bulletin',
            title : 'Key Takeways',
        },
        {
            id : '2',
            division : 'PPA',
            category : 'Audit News',
            title : 'IA Partner',
        },
        {
            id : '3',
            division : 'IT',
            category : 'Audit Bulletin',
            title : 'AI di Perbankan',
        },
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Divison', field:'division'},
        {title:'Category', field:'category'},
        {title:'Topic', field:'title'}
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
