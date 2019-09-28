
import { createStore, applyMiddleware } from 'redux'

import { getInitialState } from '../utils/initialState'
import rootReducer from './rootReducer'
import Middlewares from '../middlewares'

const store = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(...Middlewares)
)

export default store
