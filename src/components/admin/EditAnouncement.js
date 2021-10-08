import React, { useState } from 'react'
import Anouncement from '../training/your-training-components/Anouncement'

const EditAnouncement = () => {

    const [anouncementText, setAnouncementText] = useState('')

    const url = 'http://103.200.4.18:8181/api/admin/training_announcement_form'

    const onSubmit = (e) => {
        e.preventDefault()

          fetch(url,
            {
                method: 'POST',
				body: e.target.value,
            }
            )
          .then(resp => resp.json())
          .then(resp => setAnouncementText(resp))
          setAnouncementText('')
    }
    return (
        <div>
            <div className="header">
                <h1>Edit Anouncement</h1>
            </div>
            <h3>Anouncement Preview:</h3>
            <Anouncement/>
            <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control-comment'>
                <label>Edit Here:</label>
                <input type='text' placeholder='Anouncement' 
                value={anouncementText} onChange={(e) => setAnouncementText(e.target.value)}
                />
            </div> 

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
          </form>
        </div>
    )
}

export default EditAnouncement
