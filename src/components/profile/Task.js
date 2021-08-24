import { GrStatusGood } from 'react-icons/gr'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text} <GrStatusGood /></h3>
            <p>{task.comment}</p>
        </div>
    )
}

export default Task
