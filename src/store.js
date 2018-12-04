import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'
import logger from './middleware/Logger' 
import { FetchWorkouts } from './actions/FetchActions'

const store = createStore(
    RootReducer,
    applyMiddleware( thunk, logger )
);

export default store
