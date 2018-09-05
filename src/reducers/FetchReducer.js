import * as types from '../actions/Actions';
import initialState from './initialState';

export default function FetchReducer(
    state = initialState.workouts,
    action
) {
    switch(action.type) {
        case types.FETCH_WORKOUTS_SUCCESS:
            return action.workouts;
        default:
            return state;
    }
}
