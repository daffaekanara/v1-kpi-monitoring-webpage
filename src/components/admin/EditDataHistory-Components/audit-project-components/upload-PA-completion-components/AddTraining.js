import { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core'
import axios from 'axios'
import FileUploader from '../../../../FileUploader'

const AddTraining = ({ onAdd }) => {
    const [projectTitle, setProjectTitle] = useState('')
    const [attachment_proof, setProof] = useState('')

    const [notifText, setNotifText] = useState('')

    //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //API modification
  const base_link = 'http://103.200.4.18:8181/api/project/submit_pa_form'
  const [link, setLink] = useState(base_link + '/' + year)

const onSubmit = (e) => {
    e.preventDefault()

    setNotifText('loading...')

    setLink(base_link + '/' + year)

    if(!projectTitle) {
        alert('please insert Project Title')
        return
    }
    if(!attachment_proof) {
        alert('please upload your Attachment')
        return
    }

    const formData = new FormData();
  formData.append("projectTitle",projectTitle );
  formData.append("attachment_proof", attachment_proof);

  axios.post(link, formData)
  .then((result) => {
      setNotifText(result.data.Details);
  })
  .catch((error) => {
      console.error('Error:', error);
  })

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
        <div>
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Year</label>
                <input type='number' placeholder='Year' 
                value={year} onChange={(e) => setYear(e.target.value)}
                />
            </div> 

            <InputLabel id="demo-simple-select-label">Project Title</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            >
            <MenuItem value={'Project 1'}>Project 1</MenuItem>
            <MenuItem value={'Project 2'}>Project 2</MenuItem>
            <MenuItem value={'Project 3'}>Project 3</MenuItem>
            </Select>

            <FileUploader
          onFileSelectSuccess={(file) => setProof(file)}
          onFileSelectError={({ error }) => alert(error)}
        />


            <input type='submit' value='Upload' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{notifText}</h1>
        </div>
    )
}

export default AddTraining
