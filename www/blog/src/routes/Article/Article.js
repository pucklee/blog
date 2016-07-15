let req = require('../request').default;

// Constants
export const SET_DATA  = 'SET_DATA'

// Actions
export function getData(value,cb) {
  return (dispatch, getState) => {
    req.ajax({
      interface : 'info',
      type      : 'post',
      param     : {
        article_id : value
      },
      callback  : function(e){
        dispatch({
          type: SET_DATA,
          data: e
        })
        cb(e)
      }
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_DATA]: (state, action) => {
    return Object.assign({}, state, {
      data: action.data
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    article_type: null,
    tag_name: null,
    tag_id: null,
    article_title: null,
    article_id: null,
    article_content: null,
    author: null,
    publish_time: null,
  },
}
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
