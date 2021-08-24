import { useState } from 'react'

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
    const [proof, setProof] = useState()
    const [duration_hours, setDurationDays] = useState(Number)
    const [id, setId] = useState('')
    const [remarks, setReamrks] = useState('')

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

    onAdd({ name, date, duration_hours, id, remarks })

    setName('')
    setDate('')
    setDurationDays(Number)
    setId('')
    setReamrks('')
}

const uploadImage = async e => {
    const files = e.target.files[0]
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'Training_proof')
    setLoading(true)
    const res = await fetch(
    'https://api.cloudinary.com/v1_1/dxvniiksw/image/upload',
    {
        method: 'POST',
        body: data
    }
)
const file = await res.json()

setProof(file.secure_url)
setLoading(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>NIK</label>
                <input type='number' placeholder={decode.nik} 
                value={id} onChange={(e) => setId(decode.nik)}/>

            </div>
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
                value={date} onChange={(e) => setDate(e.target.value)}/>
                
            </div> 

            <div className='form-control-comment'>
                <label>Remarks</label>
                <input type='name' placeholder='Remarks' 
                value={remarks} onChange={(e) => setReamrks(e.target.value)}/>

            </div>
            
            <div className='form-control'>
                <label>Attachment Proof</label>
                <input type='file' placeholder='Upload an Image'
                onChange={(uploadImage)}
                />
                
            </div>

            {loading && <h3>Loading Attachment...</h3>}

            <input type='submit' value='Save Training' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
