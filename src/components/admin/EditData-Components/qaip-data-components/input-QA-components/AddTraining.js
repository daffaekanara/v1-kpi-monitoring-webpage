import { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

const AddTraining = ({ onAdd }) => {

    const [projectTitle, setProjectTitle] = useState('')
    const [QAType, setQAType] = useState('')
    const [TL, setTL] = useState('')
    const [DH, setDH] = useState('')
    const [QAResults, setQAResults] = useState('')
    //category
    const [qaf_category_clarity, setqaf_category_clarity] = useState(false)
    const [qaf_category_completeness, setqaf_category_completeness] = useState(false)
    const [qaf_category_consistency, setqaf_category_consistency] = useState(false)
    const [qaf_category_others, setqaf_category_others] = useState(false)
    //stage
    const [qaf_stage_planning, setqaf_stage_planning] = useState(false)
    const [qaf_stage_fieldwork, setqaf_stage_fieldwork] = useState(false)
    const [qaf_stage_reporting, setqaf_stage_reporting] = useState(false)
    const [qaf_stage_post_audit_act, setqaf_stage_post_audit_act] = useState(false)
    //deliverables 1
    const [qaf_deliverables_1a, setqaf_deliverables_1a] = useState(false)
    const [qaf_deliverables_1b, setqaf_deliverables_1b] = useState(false)
    const [qaf_deliverables_1c, setqaf_deliverables_1c] = useState(false)
    const [qaf_deliverables_1d, setqaf_deliverables_1d] = useState(false)
    const [qaf_deliverables_1e, setqaf_deliverables_1e] = useState(false)
    const [qaf_deliverables_1f, setqaf_deliverables_1f] = useState(false)
    const [qaf_deliverables_1g, setqaf_deliverables_1g] = useState(false)
    const [qaf_deliverables_1h, setqaf_deliverables_1h] = useState(false)
    const [qaf_deliverables_1i, setqaf_deliverables_1i] = useState(false)
    const [qaf_deliverables_1j, setqaf_deliverables_1j] = useState(false)
    const [qaf_deliverables_1k, setqaf_deliverables_1k] = useState(false)
    //deliverables the others
    const [qaf_deliverables_2, setqaf_deliverables_2] = useState(false)
    const [qaf_deliverables_3, setqaf_deliverables_3] = useState(false)
    const [qaf_deliverables_4, setqaf_deliverables_4] = useState(false)
    const [qaf_deliverables_5, setqaf_deliverables_5] = useState(false)
    const [qaf_deliverables_6, setqaf_deliverables_6] = useState(false)
    const [qaf_deliverables_7, setqaf_deliverables_7] = useState(false)
    //QA Sample
    const [qa_sample, setQASample] = useState(false)
    //Remarks
    const [remarks, setRemarks] = useState('')
    //year
    const [year, setYear] = useState(Number)

    const QAResultsList = [
        {title: 'Generally Conforms'},
        {title: 'Partially Conforms'},
        {title: 'Does Not Conform'}
    ]

    const PlanList = [
        {title: 'Plan - Regular'},
        {title: 'Plan - Thematic'},
        {title: 'Regulatory'},
        {title: 'Special Review'}
    ]

    const TitleList = [
        {title: 'Project 1'},
        {title: 'Project 2'},
        {title: 'Project 3'},
        {title: 'Project 4'}
    ]

const onSubmit = (e) => {
    e.preventDefault()

    if(!projectTitle) {
        alert('please insert Project Title')
        return
    }
    if(!QAType) {
        alert('please insert QA Type')
        return
    }
    if(!QAResults) {
        alert('please insert QA Results')
        return
    }
    if(!qa_sample) {
        alert('please insert QA Sample')
        return
    }

    onAdd({
        projectTitle, 
        QAType, 
        TL, 
        DH, 
        QAResults, 
        qaf_category_clarity,
        qaf_category_completeness,
        qaf_category_consistency,
        qaf_category_others,
        qaf_stage_planning,
        qaf_stage_fieldwork,
        qaf_stage_reporting,
        qaf_stage_post_audit_act,
        qaf_deliverables_1a,
        qaf_deliverables_1b,
        qaf_deliverables_1c,
        qaf_deliverables_1d,
        qaf_deliverables_1e,
        qaf_deliverables_1f,
        qaf_deliverables_1g,
        qaf_deliverables_1h,
        qaf_deliverables_1i,
        qaf_deliverables_1j,
        qaf_deliverables_1k,
        qaf_deliverables_2,
        qaf_deliverables_3,
        qaf_deliverables_4,
        qaf_deliverables_5,
        qaf_deliverables_6,
        qaf_deliverables_7,
        qa_sample,
        remarks,
        year
        })

    setProjectTitle('')
    setQAType('')
    setTL('')
    setDH('')
    setQAResults('')
    setqaf_category_clarity(false)
    setqaf_category_completeness(false)
    setqaf_category_consistency(false)
    setqaf_category_others(false)
    setqaf_stage_planning(false)
    setqaf_stage_fieldwork(false)
    setqaf_stage_reporting(false)
    setqaf_stage_post_audit_act(false)
    setqaf_deliverables_1a(false)
    setqaf_deliverables_1b(false)
    setqaf_deliverables_1c(false)
    setqaf_deliverables_1d(false)
    setqaf_deliverables_1e(false)
    setqaf_deliverables_1f(false)
    setqaf_deliverables_1g(false)
    setqaf_deliverables_1h(false)
    setqaf_deliverables_1i(false)
    setqaf_deliverables_1j(false)
    setqaf_deliverables_1k(false)
    setqaf_deliverables_2(false)
    setqaf_deliverables_3(false)
    setqaf_deliverables_4(false)
    setqaf_deliverables_5(false)
    setqaf_deliverables_6(false)
    setqaf_deliverables_7(false)
    setQASample(false)
    setRemarks('')
    setYear(Number)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Year</label>
                <input type='numeric' placeholder='Year'
                value={year} onChange={(e) => setYear(e.target.value)} 
                />

            </div>

            <Autocomplete
                options={PlanList}
                style={{ width: 300 }}
                getOptionLabel={(option) => option.title}
                value={QAType} onChange={(e) => setQAType(e.target.value)}
                renderInput={(params) => <TextField {...params} label="QA Types" variant="outlined" />}
            />

            <span></span>

            <Autocomplete
                options={TitleList}
                style={{ width: 300 }}
                value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Project Title" variant="outlined" />}
            />


            <div className='form-control'>
                <label>Team Leader</label>
                <input type='name' placeholder='Team Leader'
                value={TL} onChange={(e) => setTL(e.target.value)} 
                />

            </div>

            <div className='form-control'>
                <label>Division Head</label>
                <input type='name' placeholder='Division Head'
                value={DH} onChange={(e) => setDH(e.target.value)} 
                />

            </div>

            <Autocomplete
                options={QAResultsList}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                value={QAResults} onChange={(e) => setQAResults(e.target.value)}
                renderInput={(params) => <TextField {...params} label="QA Results" variant="outlined" />}
            />

            <h2>QA Findings - (Category)</h2>

            <div className='form-control form-control-check'>
                <label>Clarity</label>
                <input type='checkbox'
                checked={qaf_category_clarity}
                value={qaf_category_clarity} onChange={(e) => setqaf_category_clarity(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Completeness</label>
                <input type='checkbox'
                checked={qaf_category_completeness}
                value={qaf_category_completeness} onChange={(e) => setqaf_category_completeness(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Consistency</label>
                <input type='checkbox'
                checked={qaf_category_consistency}
                value={qaf_category_consistency} onChange={(e) => setqaf_category_consistency(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Others</label>
                <input type='checkbox'
                checked={qaf_category_others}
                value={qaf_category_others} onChange={(e) => setqaf_category_others(e.currentTarget.checked)}/>
                
            </div>

            <h2>QA Findings - (Stage)</h2>

            <div className='form-control form-control-check'>
                <label>Planning</label>
                <input type='checkbox'
                checked={qaf_stage_planning}
                value={qaf_stage_planning} onChange={(e) => setqaf_stage_planning(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Fieldwork</label>
                <input type='checkbox'
                checked={qaf_stage_fieldwork}
                value={qaf_stage_fieldwork} onChange={(e) => setqaf_stage_fieldwork(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Reporting</label>
                <input type='checkbox'
                checked={qaf_stage_reporting}
                value={qaf_stage_reporting} onChange={(e) => setqaf_stage_reporting(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>Post Audit Activity</label>
                <input type='checkbox'
                checked={qaf_stage_post_audit_act}
                value={qaf_stage_post_audit_act} onChange={(e) => setqaf_stage_post_audit_act(e.currentTarget.checked)}/>
                
            </div>

            <h2>QA Findings - (Subject / Deliverables)</h2>

            <div className='form-control form-control-check'>
                <label>1. a. Auditable Entity Information</label>
                <input type='checkbox'
                checked={qaf_deliverables_1a}
                value={qaf_deliverables_1a} onChange={(e) => setqaf_deliverables_1a(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. b. Risk Profiles (RAP/ORP)</label>
                <input type='checkbox'
                checked={qaf_deliverables_1b}
                value={qaf_deliverables_1b} onChange={(e) => setqaf_deliverables_1b(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. c. Audit Program</label>
                <input type='checkbox'
                checked={qaf_deliverables_1c}
                value={qaf_deliverables_1c} onChange={(e) => setqaf_deliverables_1c(e.currentTarget.checked)}/>
                
            </div>

            <div className='form-control form-control-check'>
                <label>1. d. Audit Sampling Plan</label>
                <input type='checkbox'
                checked={qaf_deliverables_1d}
                value={qaf_deliverables_1d} onChange={(e) => setqaf_deliverables_1d(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. e. MGO Rating</label>
                <input type='checkbox'
                checked={qaf_deliverables_1e}
                value={qaf_deliverables_1e} onChange={(e) => setqaf_deliverables_1e(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. f. Out of Scope/Reliance area</label>
                <input type='checkbox'
                checked={qaf_deliverables_1f}
                value={qaf_deliverables_1f} onChange={(e) => setqaf_deliverables_1f(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. g. 3LoD Reliance</label>
                <input type='checkbox'
                checked={qaf_deliverables_1g}
                value={qaf_deliverables_1g} onChange={(e) => setqaf_deliverables_1g(e.currentTarget.checked)}/>
                
            </div>

            <div className='form-control form-control-check'>
                <label>1. h. Risk Hotspot Coverage</label>
                <input type='checkbox'
                checked={qaf_deliverables_1h}
                value={qaf_deliverables_1h} onChange={(e) => setqaf_deliverables_1h(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. i. Audit Engagement Information</label>
                <input type='checkbox'
                checked={qaf_deliverables_1i}
                value={qaf_deliverables_1i} onChange={(e) => setqaf_deliverables_1i(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. j. Time Allocation</label>
                <input type='checkbox'
                checked={qaf_deliverables_1j}
                value={qaf_deliverables_1j} onChange={(e) => setqaf_deliverables_1j(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>1. k. Approval from DH</label>
                <input type='checkbox'
                checked={qaf_deliverables_1k}
                value={qaf_deliverables_1k} onChange={(e) => setqaf_deliverables_1k(e.currentTarget.checked)}/>
                
            </div>

            <div className='form-control form-control-check'>
                <label>2. Working Paper (WP)</label>
                <input type='checkbox'
                checked={qaf_deliverables_2}
                value={qaf_deliverables_2} onChange={(e) => setqaf_deliverables_2(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>3. Audit Documentation</label>
                <input type='checkbox'
                checked={qaf_deliverables_3}
                value={qaf_deliverables_3} onChange={(e) => setqaf_deliverables_3(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>4. Checklist for supervisory review</label>
                <input type='checkbox'
                checked={qaf_deliverables_4}
                value={qaf_deliverables_4} onChange={(e) => setqaf_deliverables_4(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>5. Audit report</label>
                <input type='checkbox'
                checked={qaf_deliverables_5}
                value={qaf_deliverables_5} onChange={(e) => setqaf_deliverables_5(e.currentTarget.checked)}/>
                
            </div>    
 
            <div className='form-control form-control-check'>
                <label>6. Corrective Actions Closure</label>
                <input type='checkbox'
                checked={qaf_deliverables_1a}
                value={qaf_deliverables_1a} onChange={(e) => setqaf_deliverables_1a(e.currentTarget.checked)}/>
                
            </div> 

            <div className='form-control form-control-check'>
                <label>7. Others</label>
                <input type='checkbox'
                checked={qaf_deliverables_7}
                value={qaf_deliverables_7} onChange={(e) => setqaf_deliverables_7(e.currentTarget.checked)}/>
                
            </div>

            <h2>QA Sample</h2>

            <div className='form-control form-control-check'>
                <label>QA Sample</label>
                <input type='checkbox'
                checked={qa_sample}
                value={qa_sample} onChange={(e) => setQASample(e.currentTarget.checked)}/>
                
            </div>

            <h2>Remarks</h2>

            <div className='form-control-comment'>
                <label>Remarks</label>
                <input type='name' placeholder='Remarks'
                value={remarks} onChange={(e) => setRemarks(e.currentTarget.checked)}/> 

            </div>

            <input type='submit' value='Save QA Results' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
