import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            expenses : 'Staff Expense (salaries)',
            budgetYear : 29794344016,
            budgetMonth : 12116868772,
            actualMonth : 13548818056,
            MTD : '112%',
            YTD : '45%',
            STDProRate : '42%',
            overUnderBudget : '4%',
            variance : ''
        },
        {
            id : '2',
            expenses : 'Staff Training & Regional Meeting',
            budgetYear : 29794344016,
            budgetMonth : 12116868772,
            actualMonth : 13548818056,
            MTD : '112%',
            YTD : '45%',
            STDProRate : '42%',
            overUnderBudget : '4%',
            variance : ''
        },
        {
            id : '3',
            expenses : 'Revenue Related (communications',
            budgetYear : 29794344016,
            budgetMonth : 12116868772,
            actualMonth : 13548818056,
            MTD : '112%',
            YTD : '45%',
            STDProRate : '42%',
            overUnderBudget : '4%',
            variance : ''
        },
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Expenses', field:'expenses'},
        {title:'Budget Jan-Dec 2021', field:'budgetYear'},
        {title:'Budget May 2021', field:'budgetMonth'},
        {title:'Actual May 2021', field:'actualMonth'},
        {title:'% MTD 2021', field:'MTD'},
        {title:'% YTD 2021', field:'YTD'},
        {title:'STD Pro Rate', field:'STDProRate'},
        {title:'Over / Under Budget', field:'overUnderBudget'},
        {title:'Variance Explanation', field:'variance'}
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
