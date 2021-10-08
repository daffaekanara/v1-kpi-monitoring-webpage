import { useState } from 'react'
import FileUploader from '../../FileUploader'
import axios from 'axios'


const AddTraining = ({ onAdd }) => {

    //date data
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

    const [retype_text, setretype_text] = useState('')
    const [text, setText] = useState('')

const onSubmit = (e) => {
    e.preventDefault()

    if(retype_text != 'Proceed migration') {
        alert('Please type "Proceed migration"')
        return
    }

    const formData = new FormData();
  formData.append("year", year);

  axios.post('http://103.200.4.18:8181/api/admin/operation/migrate_data', {
  year: year
})
    .then((res) => console.log(res))
    .catch((err) => alert("File Upload Error"));

    setretype_text('')
    setText('Migration Completed.')
}

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Please type "Proceed migration"</label>
                <input type='name' placeholder="Proceed migration"
                value={retype_text} onChange={(e) => setretype_text(e.target.value)}/>

            </div>

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{text}</h1>
        </div>
    )
}

export default AddTraining
