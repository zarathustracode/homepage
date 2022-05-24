import { useState } from "react"
import Simulations from "../components/Simulations";
import Header from "../components/Header";

import React from 'react'

const LIF = () => {

  const [simulations, setSimulations] = useState(
    [
        {
            id: 1,
            text: "LIF simulation",
            day: "May 20th at 2:00 pm",
            done: true
        },
        {
            id:2,
            text: "PPO3 simulation",
            day: "May 20th at 5:00 pm",
            done: false
        },
        {
            id:3,
            text: "GPT simulation",
            day: "May 10th at 5:00 pm",
            done: true
        },
    
    ]
)
  const name = 'Nebojsa'

  const deleteTask = (id) => {
    setSimulations(simulations.filter((task)=>task.id !== id))
  }



  return (
    <div>
      <Header title= 'Leaky-integrate-and-fire'/>
      <h1 className='text-3xl font-sans'> Simple frontend </h1>
      {simulations.length > 0 ? <Simulations simulations={simulations} onDelete={deleteTask}/> : 'No simulations were run!'}
      <h2 className='text-1xl font-sans' >Leaky neurons, made by {name}</h2>
    </div>
  )
}

export default LIF;