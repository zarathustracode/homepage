import { createContext, useReducer, useEffect } from "react"
import Reducer from "./Reducer";

//initial state
const initialState = {
  user: [],
  token: []
}

export const State = createContext(initialState);

export const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //actions
  const addSimulation = (simulation) => {
    dispatch({type: "ADD_SIMULATION", payload: simulation})
  }

  return (
    <State.Provider 
    value={{
      user: state.user, 
      token: state.token,
      addSimulation}}>
      {props.children}
    </State.Provider>
  )
}
