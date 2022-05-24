import { FaTimes } from 'react-icons/fa'

const Simulation = ({simulation, onDelete}) => {
  return (
    <div className="simulation text-ellipsis bg-yellow-200 m-4 p-4">
        <h3>{simulation.text} <FaTimes onClick={()=> onDelete(simulation.id)}/> </h3>
        <p>{simulation.day}</p>
    </div>
  )
}

export default Simulation