import { UPDATE_QUERY_STRING } from '../actions/Actions';
import initialState from './initialState';

export default function SearchReducer (
    state = initialState.query,
    action
) {
    switch ( action.type ) {
        case UPDATE_QUERY_STRING:
            return action.text;
        default:
            return state;
    }
}
