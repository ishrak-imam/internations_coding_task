import { combineReducers } from 'redux'

import * as groupsReducer from '../modules/groups/reducer'

const rootReducer = combineReducers({
  ...groupsReducer
})

export default rootReducer
