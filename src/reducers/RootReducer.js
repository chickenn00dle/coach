import { combineReducers } from 'redux';
import workouts from './FetchReducer';

const RootReducer = combineReducers({
    workouts
});

export default RootReducer;
