

// Constants
export const SET_WTH  = 'SET_WTH'

// Actions


export function setWth(value) {
  return {
    type: SET_WTH,
    wth: value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_WTH]: (state, action) => {
    return Object.assign({}, state, {
      wth: action.wth
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  wth: null,
}
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
