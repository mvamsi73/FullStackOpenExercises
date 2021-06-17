import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecDotereducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { storeini } from './store'
import notificationReducer from './reducers/notificationReducer'
export const reducer = combineReducers({
  anecdotes: anecDotereducer,
  filter: filterReducer,
  notification:notificationReducer
})
const store=storeini(reducer)
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)