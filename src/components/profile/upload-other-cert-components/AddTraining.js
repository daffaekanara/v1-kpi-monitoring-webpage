import { useState } from 'react'
import FileUploader from '../../FileUploader'
import axios from 'axios'

//user data
import useToken from '../../../useToken'
import jwt from 'jwt-decode'

const AddTraining = ({ onAdd }) => {

    //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const [certification_name, setCertification_name] = useState('')
    const [proof, setProof] = useState(null)
    const [id, setId] = useState(decode.nik)
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!certification_name) {
        alert('please insert your certification name')
        return
    }
    if(certification_name.indexOf('/') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf(':') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('*') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('?') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('"') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('<') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('>') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if(certification_name.indexOf('|') > -1) {
        alert('The following characters are not allowed for certificate name \ / : * ? \" < > |')
        return
    }
    if (!proof) {
        alert('Please attach proof')
        return
    }

    const formData = new FormData();
  formData.append("certification_name", certification_name);
  formData.append("proof", proof);
  formData.append("nik", id);

  axios.post('http://156.67.217.92/api/admin/employee_data/cert/others', formData)
    .then((res) => console.log(res))
    .catch((err) => alert("File Upload Error"));

    setCertification_name('')
    setProof(null)
    setText('Certificate Uploaded.')
}

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Certification Name</label>
                <input type='name' placeholder='Certification Name' 
                value={certification_name} onChange={(e) => setCertification_name(e.target.value)}/>

            </div>
            
            <FileUploader
          onFileSelectSuccess={(file) => setProof(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
            {loading && <h3>Loading Attachment...</h3>}

            <input type='submit' value='Save Other Certificate' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{text}</h1>
        </div>
    )
}

export default AddTraining
