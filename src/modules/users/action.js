
import { createAction } from '../../utils/reduxHelpers'

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'

export const addUser = createAction(ADD_USER)
export const deleteUser = createAction(DELETE_USER)
