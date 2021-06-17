import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export const storeini=(reducer) =>{ return createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))}
