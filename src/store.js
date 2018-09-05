import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';
import logger from './middleware/Logger'; 
import { fetchWorkouts } from './actions/FetchActions';

const store = createStore(
    RootReducer,
    applyMiddleware(thunk, logger)
);

store.dispatch(fetchWorkouts());

export default store;
