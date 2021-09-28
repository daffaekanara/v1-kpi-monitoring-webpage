import { GrDocumentUpdate } from 'react-icons/gr'
import { FiSlash } from 'react-icons/fi'

const Training = ({ training, onDownload }) => {
    return (
        <div className='training'>
            <h3>
                {training.name} 
                {training.proof
                ? <GrDocumentUpdate style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => onDownload(training.id)}/>
                : <FiSlash style={{color:'red'}}/>
                }
            </h3>
            <h6>
                {training.duration_days} hour
            </h6>
        </div>
    )
}

export default Training
