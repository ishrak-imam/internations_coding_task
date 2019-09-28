
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { getInitialState } from '../utils/initialState'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import Middlewares from '../middlewares'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, ...Middlewares]

const store = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)
export default store
