import { combineReducers } from 'redux'

import * as groupsReducer from '../modules/groups/reducer'
import * as usersReducer from '../modules/users/reducer'

const rootReducer = combineReducers({
  ...groupsReducer,
  ...usersReducer
})

export default rootReducer
