
import { createAction } from '../../utils/reduxHelpers'

export const ADD_GROUP = 'ADD_GROUP'
export const DELETE_GROUP = 'DELETE_GROUP'

export const addGroup = createAction(ADD_GROUP)
export const deleteGroup = createAction(DELETE_GROUP)
