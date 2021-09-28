import { useState } from 'react'
import FileUploader from '../../FileUploader'
import axios from 'axios'
import moment from 'moment';

//user data
import useToken from '../../../useToken'
import jwt from 'jwt-decode'

const AddTraining = ({ onAdd }) => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [proof, setProof] = useState(null)
    const [duration_hours, setDurationDays] = useState(Number)
    const [id, setId] = useState(decode.nik)
    const [remarks, setReamrks] = useState('-')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
        alert('please insert your training name')
        return
    }
    if(!date) {
        alert('please insert your training date')
        return
    }
    if(!duration_hours) {
        alert('please insert your training duration')
        return
    }
    if(duration_hours > 40) {
        alert('max 40 hours, please revise')
        return
    }
    if(duration_hours < 0) {
        alert('duration cannot be negative')
        return
    }
    if (!proof) {
        alert('Please attach proof')
        return
    }

    const formData = new FormData();
  formData.append("name", name);
  formData.append("date", date);
  formData.append("proof", proof);
  formData.append("duration_hours", duration_hours);
  formData.append("id", id);
  formData.append("remarks", remarks);

  axios.post('http://156.67.217.92/api/training/form-file', formData)
    .then((res) => {
        console.log(res)
        setText('Training Uploaded.')
    })
    .catch((err) => {
        setText('Please Fill All of The Form.')
    });

    setName('')
    setDate('')
    setDurationDays(Number)
    setReamrks('-')
    setProof(null)
}

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Training</label>
                <input type='name' placeholder='Name of Training' 
                value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>duration(hour)</label>
                <input type='number' placeholder='hours' 
                value={duration_hours} onChange={(e) => setDurationDays(e.target.value)}/>
                
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' placeholder='Date'
                value={date} onChange={(e) => setDate(e.target.value)} min={moment().format("YYYY-01-01")} max={moment().format("YYYY-12-31")}/>
                
            </div> 

            <div className='form-control-comment'>
                <label>Remarks</label>
                <input type='name' placeholder='Remarks' 
                value={remarks} onChange={(e) => setReamrks(e.target.value)}/>

            </div>
            
            <FileUploader
          onFileSelectSuccess={(file) => setProof(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
            {loading && <h3>Loading Attachment...</h3>}

            <input type='submit' value='Save Training' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{text}</h1>
        </div>
    )
}

export default AddTraining
