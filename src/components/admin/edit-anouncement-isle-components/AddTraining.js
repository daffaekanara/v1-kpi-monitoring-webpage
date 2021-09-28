import { useState } from 'react'

const AddTraining = ({ onAdd }) => {
    const [body, setbody] = useState('')

const onSubmit = (e) => {
    

    onAdd({ body })

    setbody('')
}

    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control-comment'>
                <label>Anouncement:</label>
                <input type='name' placeholder='New Anouncement' 
                value={body} onChange={(e) => setbody(e.target.value)}/>

            </div>

            <input type='submit' value='Save body' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        
    )
}

export default AddTraining
