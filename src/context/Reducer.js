export default (state, action) => {
  switch (action.type) {
    case "ADD_SIMULATION":
      return {
        ...state,
        user: [action.payload, ...state]
      }
    default:
      return state;
  }
}