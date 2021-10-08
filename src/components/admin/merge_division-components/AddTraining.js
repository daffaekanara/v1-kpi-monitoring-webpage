import { useState, useEffect } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core'
import FileUploader from '../../FileUploader'
import axios from 'axios'

const AddTraining = ({ onAdd }) => {

    const [mother_division, setmother_division] = useState('')
    const [child_division, setchild_division] = useState('')
    const [text, setText] = useState('')

    //project title
  const url_title = 'http://103.200.4.18:8181/api/utils/divs_v2'

  const [datatitle, setDatatitle] = useState('')
  const [QAType, setQAType] = useState('')
  const [QAResults, setQAResults] = useState('')

  //fetch DB project name
  useEffect(() => {getDatatitle()}, [])

  const getDatatitle = () => {
    fetch(url_title)
    .then(resp => resp.json())
    .then(resp => {
        setDatatitle(resp)
        console.log(datatitle)
      })
  }

const onSubmit = (e) => {
    e.preventDefault()

    if(!mother_division) {
        alert('please insert mother division.')
        return
    }
    if (!child_division) {
        alert('Please insert child division.')
        return
    }

    const formData = new FormData();
  formData.append("mother_division", mother_division);
  formData.append("child_division", child_division);

  axios.post('http://103.200.4.18:8181/api/admin/operation/merge-division', {
  mother_division: mother_division,
  child_division: child_division
    }).catch(err => {
        console.log(err)
        alert('backend error')
        return
      });

    setmother_division('')
    setchild_division('')
    setText('Divisions merged.')
}

const DivisionList = datatitle

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>

            <Autocomplete
                id="mother_division"
                options={DivisionList}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => setmother_division(value.title)}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Mother Division" variant="outlined" />}
            />

        <Autocomplete
                id="child_division"
                options={DivisionList}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => setchild_division(value.title)}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Child Division" variant="outlined" />}
            />

            <input type='submit' value='Merge Divisions' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>
        <h1 className='header'>{text}</h1>
        </div>
    )
}

export default AddTraining
