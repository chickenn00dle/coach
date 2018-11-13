import { FETCH_WORKOUTS_SUCCESS } from '../actions/Actions'
import InitialState from './InitialState'

const FetchReducer = (
    state = InitialState.workouts,
    action
) => {
    switch( action.type ) {
        case FETCH_WORKOUTS_SUCCESS:
            return action.workouts
        default:
            return state
    }
}

export default FetchReducer
