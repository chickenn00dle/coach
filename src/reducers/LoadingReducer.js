import { FETCH_WORKOUTS_COMPLETE } from '../actions/Actions'
import InitialState from './InitialState'

const LoadingReducer = (
    state = InitialState.loading,
    action
) => {
    switch( action.type ) {
        case FETCH_WORKOUTS_COMPLETE:
            return action.complete
        default: 
            return state
    }
}

export default LoadingReducer
