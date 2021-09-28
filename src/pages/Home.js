import React from 'react'
import AuditProjects from '../components/auditpp/AuditProjects'
import BudgetData from '../components/budget/BudgetData'
import TrainingBudget from '../components/training/TrainingBudget'
import TotalJoin from '../components/attrition/TotalJoin'
import BUSUEng from '../components/busu/BUSUEng'
import ClientSurvey from '../components/csf/ClientSurvey'
import ContributeAudit from '../components/busu/ContributeAudit'
import QAInformation from '../components/QAIP/QAInformation'
import EducationLevel from '../components/home/IADemographic-component/EducationLevel'
import AgeGroup from '../components/home/IADemographic-component/AgeGroup'
import Certification from '../components/home/IADemographic-component/Certification'
import Certification2 from '../components/home/IADemographic-component/Certification2'
import AuditEXP from '../components/home/IADemographic-component/AuditEXP'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header'

const Home = () => {
    return (
        <div>
            <span></span>
            <h1 className='header-page' style={{fontWeight: 'bold'}}>
                DASHBOARD
            </h1>
            <div className='dashboard-container'>
                <span></span>
                <div className='header'>
                    <AuditProjects/>
                    <BudgetData/>
                </div>
                <div className='header'>
                    <TotalJoin/>
                    <TrainingBudget/>
                </div>
                <div className='header'>
                    <BUSUEng/>
                    <ClientSurvey/>
                </div>
                <div className='header'>
                    <ContributeAudit/>
                </div>
                <div className='header'>
                    <QAInformation/>
                </div>
            </div>
            <div className='dashboard-container'>
                <h1 className='header' style={{fontWeight: 'bold'}}>
                    IA DEMOGRAPHIC
                </h1>
                <span></span>
                <div className='header'>
                    <EducationLevel/>
                    <AgeGroup/>
                </div>
                <div className='header'>
                    <Certification/>
                    <Certification2/>
                </div>
                <div className='header'>
                    <AuditEXP/>
                </div>
            </div>
        </div>
    )
}

export default Home