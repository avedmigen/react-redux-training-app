const defaultState = {
  count: 0,
}

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INC_COUNT':
      return {...state, count: state.count + action.payload}
    case 'DEC_COUNT':
      return { ...state, count: state.count - action.payload}
    default:
      return state
  }
}
