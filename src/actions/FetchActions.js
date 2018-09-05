import api from '../Contentful';
import * as types from './Actions';

export const fetchWorkouts = () => {
    return dispatch => {
        return api.getEntries({
            content_type: 'workout'
        }).then(workouts => {
                dispatch(fetchWorkoutsSuccess(workouts.items.map(
                    item => item.fields 
                )));
            })
            .catch(err => {
                throw(err)
            });
    }
}

export const fetchWorkoutsSuccess = workouts => {
    return { 
        type: types.FETCH_WORKOUTS_SUCCESS,
        workouts
    }
}
