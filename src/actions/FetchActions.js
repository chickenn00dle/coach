import api from '../contentful'
import { FETCH_WORKOUTS_SUCCESS, FETCH_WORKOUTS_COMPLETE } from './Actions'
import { loadState } from '../localStorage'

export const FetchWorkouts = () => {
    const serializedState = loadState()
    if ( serializedState ) {
        return dispatch => {
            dispatch( FetchWorkoutsSuccess( serializedState ) )
            dispatch( FetchWorkoutsComplete( true ) )
        } 
    } else {
        return dispatch => {
            return api.getEntries({
                content_type: 'workout'
            }).then( workouts => {
                dispatch( FetchWorkoutsSuccess( workouts.items.map(
                    item => item.fields 
                )))
                dispatch( FetchWorkoutsComplete( true ) )
            })
            .catch( err => {
                throw( err )
            })
        }
    }
}

export const FetchWorkoutsSuccess = workouts => ({ 
    type: FETCH_WORKOUTS_SUCCESS,
    workouts
})

export const FetchWorkoutsComplete = ( complete ) => ({
    type: FETCH_WORKOUTS_COMPLETE,
    complete 
})
