import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '../Button'

const MaintananceBtn = () => {

    const [text,setText] = useState('')
    const [maintananceMode,setMaintananceMode] = useState()

    useEffect(() => {
        axios.get('http://156.67.217.92/api/admin/maintenance')
        .then(res => {
            setMaintananceMode(res.data.is_maintenance_mode)
            console.log(res.data.is_maintenance_mode)
            {
                if (res.data.is_maintenance_mode) {
                  return setText('MAINTANANCE MODE: ON');
                } else {
                  return setText('MAINTANANCE MODE: OFF');
                }
              }
        })
        
    }, [])

    const onSubmit = (e) => {

        const data = new FormData()
        data.append('is_maintenance_mode', e.currentTarget.checked)
        const res = fetch(
            'http://156.67.217.92/api/admin/maintenance',
            {
                method: 'POST',
                body: data
            }
        )
        axios.get('http://156.67.217.92/api/admin/maintenance')
        .then(res => {
            setMaintananceMode(res.data.is_maintenance_mode)
            console.log(res.data.is_maintenance_mode)
            {
                if (res.data.is_maintenance_mode) {
                  return setText('MAINTANANCE MODE: ON');
                } else {
                  return setText('MAINTANANCE MODE: OFF');
                }
              }
        })
    }

    return (
        <div className='header'>
            
            <div className='maintanance-btn'>
                <Button color={'#ff9999'} 
                text={'Change'} onClick={
                    onSubmit

                    }/>
                {text}
            </div>
        </div>
    )
}

//RED
//#b90e0a

export default MaintananceBtn

