import { UPDATE_QUERY_STRING } from '../actions/Actions'
import InitialState from './InitialState'

const SearchReducer = (
    state = InitialState.query,
    action
) => {
    switch ( action.type ) {
        case UPDATE_QUERY_STRING:
            return action.text
        default:
            return state
    }
}

export default SearchReducer;
