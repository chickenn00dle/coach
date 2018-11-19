import { combineReducers } from 'redux'
import workouts from './FetchReducer'
import query from './SearchReducer'
import filter from './FilterTypeReducer'
import anchor from './SetAnchorReducer'

const RootReducer = combineReducers({
    workouts,
    query,
    filter,
    anchor,
})

export default RootReducer
