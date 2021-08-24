import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            divison : '',
            name : '',
            trainingTitle : 'Reverse Accrue English Course',
            date : '',
            numberOfDays : '',
            budget : '',
            costRealization : '',
            chargedByFinance : -34700000,
            mandatoryFrom :'',
            remark : 'Training 2020'
        },
        {
            id : '2',
            divison : 'PPA',
            name : 'Stephanie',
            trainingTitle : 'Beasiswa',
            date : '',
            numberOfDays : '',
            budget : 82000000,
            costRealization : 38355000,
            chargedByFinance : 38355000,
            mandatoryFrom :'HR',
            remark : ''
        },
        {
            id : '3',
            divison : 'BRDS',
            name : 'Wenny',
            trainingTitle : 'Public Speaking',
            date : '22/04/2021',
            numberOfDays : 0.13,
            budget : '',
            costRealization : '',
            chargedByFinance : '',
            mandatoryFrom :'',
            remark : ''
        },
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Divison', field:'divison'},
        {title:'Name', field:'name'},
        {title:'Training Title', field:'trainingTitle'},
        {title:'Date', field:'date'},
        {title:'Number of Days (8 hours/day)', field:'numberOfDays'},
        {title:'Budget', field:'budget'},
        {title:'Cost Realization', field:'costRealization'},
        {title:'Charged By Finance', field:'chargedByFinance'},
        {title:'Mandatory from', field:'mandatoryFrom'},
        {title:'Remark', field:'remark'}
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
