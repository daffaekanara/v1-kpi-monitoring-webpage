import { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

const AddTraining = ({ onAdd }) => {
    const [projectTitle, setProjectTitle] = useState('')
    const [attachment_proof, setProof] = useState('')

const onSubmit = (e) => {
    e.preventDefault()

    if(!projectTitle) {
        alert('please insert Project Title')
        return
    }
    if(!attachment_proof) {
        alert('please upload your Attachment')
        return
    }

    onAdd({ projectTitle, attachment_proof })

    setProjectTitle('')
    setProof('')
}

const TitleList = [
    {title: 'Project 1'},
    {title: 'Project 2'},
    {title: 'Project 3'},
    {title: 'Project 4'}
]

    return (
        <form className='add-form' onSubmit={onSubmit}>
            
           <Autocomplete
                options={TitleList}
                style={{ width: 300 }}
                value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Project Title" variant="outlined" />}
            />

            <div className='form-control'>
                <label>PA Completion Proof</label>
                <input type='file'
                value={attachment_proof} onChange={(e) => setProof(e.target.value)}/>
                
            </div> 


            <input type='submit' value='Upload' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
