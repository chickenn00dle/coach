import React from 'react'
import WorkoutCard from '../common/WorkoutCard'

const WorkoutIndex = ({ workouts }) => (
    workouts.map(workout => (
        <div key={ workout.id }>
            <WorkoutCard
                workout={ workout }
            />
        </div>
    ))
);

export default WorkoutIndex;
