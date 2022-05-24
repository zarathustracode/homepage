import Simulation from "./Simulation"

const Simulations = ({simulations, onDelete}) => {

    return (
      <>
      {simulations.map((task) => (<Simulation key={task.id} simulation={task} onDelete={onDelete}/>))}
      </>
    )
  }

export default Simulations