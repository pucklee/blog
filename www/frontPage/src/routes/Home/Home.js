

// Constants
export const SET_A  = 'SET_A'

// Actions


export function setA(value) {
  return {
    type: SET_CATEGORYNAME,
    a: value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_A]: (state, action) => {
    return Object.assign({}, state, {
      a: action.a
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
