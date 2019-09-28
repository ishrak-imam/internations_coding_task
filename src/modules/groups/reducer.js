
import { createReducer } from '../../utils/reduxHelpers'

import {
  ADD_GROUP, DELETE_GROUP
} from './action'

import { ADD_USER, DELETE_USER } from '../users/action'

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
  },

  [ADD_USER]: (state, payload) => {
    const { user: { id, groups } } = payload
    const { data } = state
    let newData = { ...data }
    groups.every(item => {
      newData[item].users.push(id)
      return true
    })
    return {
      ...state,
      data: newData
    }
  },

  [DELETE_USER]: (state, payload) => {
    const { id, groups } = payload
    const { data } = state
    let newData = { ...data }
    groups.every(item => {
      const users = newData[item].users
      newData[item].users = users.filter(item => id !== item)
      return true
    })
    return {
      ...state,
      data: newData
    }
  }
})
