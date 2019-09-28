import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import { Provider } from 'react-redux'

import App from './app'

const render = App => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)
