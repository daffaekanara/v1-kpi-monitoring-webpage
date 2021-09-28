import { useState } from 'react'
import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core'
import axios from 'axios'
import FileUploader from '../../FileUploader'
import moment from 'moment';

//user data
import useToken from '../../../useToken'
import jwt from 'jwt-decode'

const AddTraining = ({ onAdd }) => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const [WorRM, setWorRM] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState(decode.nik)
    const [activity, setActivity] = useState('')
    const [proof, setProof] = useState(null)

    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')

const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
  formData.append("WorM", WorRM);
  formData.append("date", date);
  formData.append("proof", proof);
  formData.append("activity", activity);
  formData.append("id", id);

  axios.post('http://156.67.217.92/api/engagement/input_form', formData)
    .then((res) => console.log(res))
    .catch((err) => alert("File Upload Error"));

    setWorRM('')
    setDate('')
    setActivity('')
    setProof(null)
    setText('BU/SU Uploaded.')
}

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
            <InputLabel id="demo-simple-select-label">Workshop / Regular Meeting</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={WorRM}
            onChange={(e) => setWorRM(e.target.value)}
            >
            <MenuItem value={'Regular Meeting'}>Regular Meeting</MenuItem>
            <MenuItem value={'Workshop'}>Workshop</MenuItem>
            </Select>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' placeholder='Date'
                value={date} onChange={(e) => setDate(e.target.value)}  min={moment().format("YYYY-01-01")} max={moment().format("YYYY-12-31")}/>
                
            </div> 

            <div className='form-control-comment'>
                <label>activity</label>
                <input type='name' placeholder='activity' 
                value={activity} onChange={(e) => setActivity(e.target.value)}/>

            </div>
            
            <FileUploader
          onFileSelectSuccess={(file) => setProof(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
            
            {loading && <h3>Loading Attachment...</h3>}

            <input type='submit' value='Save BU/SU' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{text}</h1>
        </div>
    )
}

export default AddTraining
