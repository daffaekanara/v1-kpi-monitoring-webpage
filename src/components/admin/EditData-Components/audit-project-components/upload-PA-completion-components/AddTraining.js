import { useState, useEffect } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core'
import axios from 'axios'
import FileUploader from '../../../../FileUploader'
import useToken from '../../../../../useToken'
import jwt from 'jwt-decode'

const AddTraining = ({ onAdd }) => {
    const [projectTitle, setProjectTitle] = useState('')
    const [attachment_proof, setProof] = useState('')

    const [notifText, setNotifText] = useState('')

    //setting year
  const newDate = new Date()
  const [year, setYear] = useState(newDate.getFullYear())

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

  //project title
  const url_title = 'http://156.67.217.92/api/utils/project_by_nik_v2/' + year + '/' + decode.nik

  const [datatitle, setDatatitle] = useState('')
  const [QAType, setQAType] = useState('')
  const [QAResults, setQAResults] = useState('')

  //fetch DB project name
  useEffect(() => {getDatatitle()}, [])

  const getDatatitle = () => {
    fetch(url_title)
    .then(resp => resp.json())
    .then(resp => {
        setDatatitle(resp)
        console.log(datatitle)
      })
  }

  //API modification
  const base_link = 'http://156.67.217.92/api/project/submit_pa_form'
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

const TitleList = datatitle

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
            
            <Autocomplete
                id="projectTitle"
                options={TitleList}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => setProjectTitle(value.title)}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Project Title" variant="outlined" />}
            />

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
