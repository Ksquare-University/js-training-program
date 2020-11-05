/**
 * Reducer
 */

const actions = require('./actionTypes');

let bugsID = 0

// Let's create a reducer

function reducer(state = [], action) {
  switch(action.type) {
    case actions.addBug:
      return [
        ...state,
        {
          ...action.payload,
          id: ++bugsID,
          isResolved: false
        }
      ]
    
    case actions.removeBug:
      return state.filter(bug => bug.id !== action.payload.id);
    
    case actions.resolveBug:
      return state.map(bug => 
        bug.id === action.payload.id ? { ...bug, isResolved: true } : bug)

    default:
      return state
  }
}

module.exports = {
  reducer
}


