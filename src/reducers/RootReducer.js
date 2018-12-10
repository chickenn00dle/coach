import { combineReducers } from 'redux'
import workouts from './FetchReducer'
import loading from './LoadingReducer'
import query from './SearchReducer'
import filter from './FilterTypeReducer'
import anchor from './SetAnchorReducer'

const RootReducer = combineReducers({
    workouts,
    loading,
    query,
    filter,
    anchor,
})

export default RootReducer
