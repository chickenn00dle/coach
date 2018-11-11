import { SET_FILTER_TYPE, filterTypes } from '../actions/Actions';

const filterType = ( state = filterTypes.WORKOUT_TITLE, action ) => {
    switch (action.type) {
        case SET_FILTER_TYPE:
            return action.filter
        default:
            return state
    }
}

export default filterType;
