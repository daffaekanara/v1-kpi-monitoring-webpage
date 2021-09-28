import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            division : 'WBGM',
            WorRM : 'Workshop',
            activity : 'CMB SOTY',
            date : '01/02/2021'
        },
        {
            id : '2',
            division : 'WBGM',
            WorRM : 'Regular Meeting',
            activity : 'Audit Process ORM',
            date : '01/01/2021'
        },
        {
            id : '3',
            division : 'BRDS',
            WorRM : 'Workshop',
            activity : 'CRS',
            date : '01/02/2021'
        }
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Division', field:'division'},
        {title:'Workshop / Regular Meeting', field:'WorRM'},
        {title:'Activity', field:'activity'},
        {title:'Date', field:'date'}
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
