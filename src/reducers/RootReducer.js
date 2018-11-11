import { combineReducers } from 'redux';
import workouts from './FetchReducer';
import query from './SearchReducer';
import filter from './FilterTypeReducer';

const RootReducer = combineReducers({
    workouts,
    query,
    filter
});

export default RootReducer;
