import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'
import { loadState } from './localStorage'

const state = loadState()
const store = createStore(
    RootReducer,
    state,
    applyMiddleware( thunk )
);

export default store
