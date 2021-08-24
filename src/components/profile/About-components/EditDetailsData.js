import React, { useState } from 'react'
import DetailsButton from './DetailsButton'
import DetailsIsle from './DetailsIsle'

const EditDetailsData = () => {

    const [showDetailsIsle, setShowDetailsIsle] = useState(false)

    return (
        <div>

            <DetailsButton
            onDetailsClick={() => 
            {setShowDetailsIsle(!showDetailsIsle)
            }}/>

            {showDetailsIsle && <DetailsIsle/>}
            
        </div>
    )
}

export default EditDetailsData
