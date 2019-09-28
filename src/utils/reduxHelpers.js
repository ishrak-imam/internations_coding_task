
/**
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @return {function}
 *
 * Takes initial state and reducer type handlers and returns a reducer function.
 * Got idea from redux documentation (reducing boilerplate)
 */
export const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload)
    } else {
      return state
    }
  }
  return reducer
}

/**
 *
 * @param {String} type
 * @return {Object}
 *
 * Takes a String to create an action object.
 */
export const createAction = type => {
  const action = payload => ({
    type,
    payload
  })
  action.getType = () => type
  return action
}

/**
 *
 * @param {Object} object
 * @param {Object} values
 *
 * Takes an object and another object with updated values and returns an object with
 * new reference (ensuring immutability)
 */
export const updateObject = (object, values) => {
  return { ...object, ...values }
}
