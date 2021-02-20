/**
 * Actions!!
 */

const actions = require('./actionTypes');

function addBug(description) {
  return {
    payload: {
      description,
    },
    type: actions.addBug
  }
}

function removeBug(id) {
  return {
    payload: {
      id
    },
    type: actions.removeBug
  }
}

function resolveBug(id) {
  return {
    payload: {
      id
    },
    type: actions.resolveBug
  }
}

module.exports = {
  addBug, 
  removeBug,
  resolveBug
}