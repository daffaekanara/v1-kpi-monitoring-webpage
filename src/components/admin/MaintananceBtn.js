import React, { useState } from 'react'
import { Switch } from 'antd'

const MaintananceBtn = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const onSubmit = () => {
        const data = new FormData()
        data.append('is_maintenance_mode', toggle)
        const res = fetch(
            'http://156.67.217.92/api/admin/maintenance',
            {
                method: 'POST',
                body: data
            }
        )
    }

    return (
        <div className='header'>
            <div className='maintanance-btn'>
                <Switch onClick={toggler} onChange={onSubmit}/>
                {toggle 
                ? <span>Maintanance Mode: ON</span> 
                : <span>Maintanance Mode: OFF</span> }
            </div>
        </div>
    )
}

//RED
//#b90e0a

export default MaintananceBtn
