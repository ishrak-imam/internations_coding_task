
import { createReducer } from '../../utils/reduxHelpers'

import {
  ADD_USER, DELETE_USER
} from './action'

import { USERS_INITIAL_STATE } from './initialState'

export const users = createReducer(USERS_INITIAL_STATE, {
  [ADD_USER]: (state, payload) => {
    const { byId, data } = state
    const { id, user } = payload
    return {
      byId: [id, ...byId],
      data: { [id]: user, ...data }
    }
  },
  [DELETE_USER]: (state, payload) => {
    const { byId, data } = state
    const { id } = payload
    let newData = { ...data }
    delete newData[id]
    return {
      byId: byId.filter(item => item !== id),
      data: newData
    }
  }
})
