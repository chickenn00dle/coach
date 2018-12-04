import api from '../contentful'
import { FETCH_WORKOUTS_SUCCESS } from './Actions'
import { loadState } from '../localStorage'

export const FetchWorkouts = () => {
    const serializedState = loadState()
    if ( serializedState ) {
        return dispatch => FetchWorkoutsSuccess( serializedState ) 
    } else {
        console.log("Fetching Workouts")
        return dispatch => {
            return api.getEntries({
                content_type: 'workout'
            }).then( workouts => {
                    dispatch( FetchWorkoutsSuccess( workouts.items.map(
                        item => item.fields 
                    )))
                })
                .catch( err => {
                    throw( err )
                })
        }
    }
}

export const FetchWorkoutsSuccess = workouts => {
    return { 
        type: FETCH_WORKOUTS_SUCCESS,
        workouts
    }
}

