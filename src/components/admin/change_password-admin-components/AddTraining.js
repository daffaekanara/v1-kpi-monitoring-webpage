import { useState } from 'react'

const AddTraining = ({ onAdd }) => {
    const [nik, setnik] = useState('')
    const [new_pw, setnew_pw] = useState('')
    const [new_pw2, setnew_pw2] = useState('')
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const [notifText, setNotifText] = useState('belum keganti')

const onSubmit = (e) => {
    e.preventDefault()

    
    if(!nik) {
        alert('please input NIK.')
        return
    }
    if(!new_pw) {
        alert('please input your new password.')
        return
    }
    if(!new_pw2) {
        alert('please re-input your new password.')
        return
    }
    if(new_pw !== new_pw2) {
        alert('wrong re-input new password.')
        return
    }
    if(new_pw.length <12) {
        alert('Password must be atleast 12 characters.')
        return
    }
    if(!new_pw.match(/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/)) {
        alert('Password must be alphanumeric and atleast 1 Special Character.')
        return
    }

    onAdd({ nik, new_pw, new_pw2 })

    setnik('')
    setnew_pw('')
    setnew_pw2('')

    setError('Incorrect email or password.')
        
}

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
                <label>Employee's NIK</label>
                <input type='number' placeholder="Employee's NIK"
                value={nik} onChange={(e) => setnik(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>New Password</label>
                <input type='password' placeholder='New Password' 
                value={new_pw} onChange={(e) => setnew_pw(e.target.value)}/>

            </div>
            <div className='form-control'>
                <label>Re-Enter New Password</label>
                <input type='password' placeholder='Re-Enter New Password' 
                value={new_pw2} onChange={(e) => setnew_pw2(e.target.value)}/>
                
            </div>

            <input type='submit' value='Save New Password' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        </div>
        
    )
}

export default AddTraining
