import { number } from 'prop-types'
import { useState } from 'react'

const AddTraining = ({ onAdd }) => {
    const [SMR_cert, setSMR_cert] = useState('')
    const [CISA_cert, setCISA_cert] = useState('')
    const [CEH_cert, setCEH_cert] = useState('')
    const [ISO_cert, setISO_cert] = useState('')
    const [CHFI_cert, setCHFI_cert] = useState('')
    const [QIA_cert, setQIA_cert] = useState('')
    const [CIA_cert, setCIA_cert] = useState('')
    const [CA_cert, setCA_cert] = useState('')
    const [CBIA_cert, setCBIA_cert] = useState('')
    const [CPA_cert, setCPA_cert] = useState('')

    const [loading, setLoading] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
    
        setSMR_cert('')
        setCISA_cert('')
        setCEH_cert('')
        setISO_cert('')
        setCHFI_cert('')
        setQIA_cert('')
        setCIA_cert('')
        setCA_cert('')
        setCBIA_cert('')
    }

    const uploadSMR = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'SMR_certif')
        setLoading(true)
        const res = await fetch(
        'https://api.cloudinary.com/v1_1/dxvniiksw/image/upload',
        {
            method: 'POST',
            body: data
        }
    )
    const file = await res.json()

    setSMR_cert(file.secure_url)
    setLoading(false)
  }

    return (
        <form onSubmit={onSubmit}>

            <div className='form-control'>
                <label>SMR Certificate</label>
                <input type='file'
                onChange={uploadSMR}/>
                
            </div> 

            <div className='form-control'>
                <label>CISA</label>
                <input type='file'
                onChange={(e) => setCISA_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CEH</label>
                <input type='file'
                value={CEH_cert} onChange={(e) => setCEH_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>ISO27001</label>
                <input type='file'
                value={ISO_cert} onChange={(e) => setISO_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CHFI</label>
                <input type='file'
                value={CHFI_cert} onChange={(e) => setSMR_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>QIA</label>
                <input type='file'
                value={QIA_cert} onChange={(e) => setQIA_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CIA</label>
                <input type='file'
                value={CIA_cert} onChange={(e) => setCIA_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CA</label>
                <input type='file'
                value={CA_cert} onChange={(e) => setCA_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CBIA</label>
                <input type='file'
                value={CBIA_cert} onChange={(e) => setCBIA_cert(e.target.value)}/>
                
            </div>

            <div className='form-control'>
                <label>CPA</label>
                <input type='file'
                value={CPA_cert} onChange={(e) => setCPA_cert(e.target.value)}/>
                
            </div>

            <input type='submit' value='Upload' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
