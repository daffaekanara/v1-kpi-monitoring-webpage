import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            division : 'WBGM',
            totalBudgetHC : 9,
            totalHCNewYear : 7,
            join : 2,
            resign : 2,
            transfer : 0,
            attritionRate : '29%',
            CurrentHC : 7,
            highPerformer : 1
        },
        {
            id : '2',
            division : 'BRDS',
            totalBudgetHC : 13,
            totalHCNewYear : 10,
            join : 3,
            resign : 0,
            transfer : 0,
            attritionRate : '0%',
            CurrentHC : 13,
            highPerformer : 1
        },
        {
            id : '3',
            division : 'TAD',
            totalBudgetHC : 11,
            totalHCNewYear : 9,
            join : 2,
            resign : 1,
            transfer : 1,
            attritionRate : '22%',
            CurrentHC : 10,
            highPerformer : 1
        }
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Divison', field:'division'},
        {title:'Total Budget Head Count', field:'totalBudgetHC'},
        {title:'Total Head Count Awal Tahun', field:'totalHCNewYear'},
        {title:'Join', field:'join'},
        {title:'Resign', field:'resign'},
        {title:'Transfer', field:'transfer'},
        {title:'Attrition Rate', field:'attritionRate'},
        {title:'Current HC', field:'CurrentHC'},
        {title:'High Performer', field:'highPerformer'}
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
