
import { createReducer } from '../../utils/reduxHelpers'

import {
  ADD_GROUP, DELETE_GROUP
} from './action'

import { GROUPS_INITIAL_STATE } from './initialState'

export const groups = createReducer(GROUPS_INITIAL_STATE, {
  [ADD_GROUP]: (state, payload) => {
    const { byId, data } = state
    const { id, group } = payload
    return {
      byId: [id, ...byId],
      data: { [id]: group, ...data }
    }
  },
  [DELETE_GROUP]: (state, payload) => {
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
