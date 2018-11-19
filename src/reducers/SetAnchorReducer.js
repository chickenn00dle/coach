import { SET_ANCHOR } from '../actions/Actions'

const SetAnchor = ( state = null, action ) => {
    switch ( action.type ) {
        case SET_ANCHOR:
            return action.anchor
        default:
            return state
    }
}

export default SetAnchor
