import React from 'react'
import BudgetData from '../components/budget/BudgetData'

const Budget = () => {
    return (
        <div className='budget'>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                BUDGET
            </h1>
            <BudgetData/>
        </div>
    )
}

export default Budget
