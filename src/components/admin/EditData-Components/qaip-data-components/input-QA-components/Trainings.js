import Training from './Training'

const Trainings = ({ trainings, onDownload}) => {

    return (
        <>
          {trainings.map((training) => (
              <Training 
                key={training} 
                training={training} 
                onDownload={onDownload}
              />
          ))}  
        </>
    )
}

export default Trainings
