import { combineReducers } from 'redux';
import workouts from './FetchReducer';
import query from './SearchReducer';

const RootReducer = combineReducers({
    workouts,
    query 
});

export default RootReducer;
