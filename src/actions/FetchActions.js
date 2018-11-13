import api from '../contentful'
import { FETCH_WORKOUTS_SUCCESS } from './Actions'

export const FetchWorkouts = () => {
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

export const FetchWorkoutsSuccess = workouts => {
    return { 
        type: FETCH_WORKOUTS_SUCCESS,
        workouts
    }
}
