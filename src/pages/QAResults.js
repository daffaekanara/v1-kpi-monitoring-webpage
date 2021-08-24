import React from 'react'
import QAInformation from '../components/QAIP/QAInformation'
//import QaTable2 from '../components/QAIP/QAInformation-components.js/QaTable2'

const QAResults = () => {
    return (
        <div>
            <h1 className='header' style={{fontWeight: 'bold'}}>
                QA Results
            </h1>
            <QAInformation/>
        </div>
    )
}

export default QAResults
