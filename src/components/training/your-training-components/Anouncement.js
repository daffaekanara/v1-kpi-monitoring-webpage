import React, {useState, useEffect} from 'react'

const Anouncement = () => {

    const [text, setText] = useState('')

    const [trainings, setTrainings] = useState([])
  
    useEffect(() => {
      const getTrainings = async () => {
        const trainingsFromServer = await fetchTrainings()
        setTrainings(trainingsFromServer)
      }
      getTrainings()
    }, []) //empty array [] for user atau yg lainnya

    const fetchTrainings = async () => {
        const res = await fetch('http://156.67.217.91/api/training/announcement')
        const data = await res.json() //res.json cuma buat fake rest API BE
      
        console.log(data)
        setText(data)
        return data
      }

    return (
        <div className="anouncement-container">
            <h1>Anouncement:</h1>
            <p> {text}
            </p>
        </div>
    )
}

export default Anouncement
