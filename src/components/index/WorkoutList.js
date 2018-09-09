import React from 'react';
import WorkoutPreview from '../common/WorkoutPreview';

const WorkoutList = props => (
    props.workouts.map(workout => (
        <div key={ workout.id }>
            <WorkoutPreview
                workout={ workout }
            />
        </div>
    ))
);

export default WorkoutList;
