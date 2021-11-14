import { applyMiddleware, createStore } from 'redux'
import allReducer from './index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;