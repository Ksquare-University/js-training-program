/**
 * Ducks
 * 
 * Rules:
 *  - MUST export default a function called reducer()
 *  - MUST export its action creators as functions
 *  - Your actions types could be exported
 */

const ADD_BUG = 'addBug';
const REMOVE_BUG = 'removeBug';
const RESOLVE_BUG = 'resolveBug';

export function addBug(description) {
  return {
    payload: {
      description,
    },
    type: ADD_BUG
  }
}

export function removeBug(id) {
  return {
    payload: {
      id
    },
    type: REMOVE_BUG
  }
}

export function resolveBug(id) {
  return {
    payload: {
      id
    },
    type: RESOLVE_BUG
  }
}

let bugsID = 0

// Let's create a reducer

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          ...action.payload,
          id: ++bugsID,
          isResolved: false
        }
      ]
    
    case REMOVE_BUG:
      return state.filter(bug => bug.id !== action.payload.id);
    
    case RESOLVE_BUG:
      return state.map(bug => 
        bug.id === action.payload.id ? { ...bug, isResolved: true } : bug)

    default:
      return state
  }
}