import { useState } from 'react'

const AddTraining = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [attachment_proof, setProof] = useState('')
    const [duration_hours, setDurationDays] = useState(Number)
    const [id, setId] = useState('')
    const [nik, setEmpId] = useState('')
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
    if(!duration_hours) {
        alert('please insert your training duration')
        return
    }
    if(!nik) {
        alert('please insert your NIK')
        return
    }

    onAdd({ name, date, duration_hours, attachment_proof, id, nik })

    setName('')
    setDate('')
    setDurationDays(Number)
    setProof('')
    setId('')
    setEmpId('')
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
                <input type='name' placeholder='NIK' 
                value={nik} onChange={(e) => setEmpId(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>Training</label>
                <input type='name' placeholder='Name of Training' 
                value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>duration(day)</label>
                <input type='name' placeholder='duration_hours' 
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
                <input type='file'
                onChange={(uploadImage)}/>
                
            </div> 

            {loading && <h3>Loading Attachment...</h3>}


            <input type='submit' value='Save Training' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
