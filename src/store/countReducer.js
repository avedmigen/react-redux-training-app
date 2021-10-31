const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';

const defaultState = {
  count: 0,
}

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {...state, count: state.count + action.payload}
    case DEC_COUNT:
      return { ...state, count: state.count - action.payload}
    default:
      return state
  }
}

export const incCounterAction = (payload) => ({type: INC_COUNT, payload});
export const decCounterAction = (payload) => ({type: DEC_COUNT, payload});
