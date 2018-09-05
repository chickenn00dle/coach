import React from 'react';
import Workout from '../common/Workout';

const WorkoutList = props => (
    props.workouts.map(workout => (
        <div>
            <Workout
                key={ workout.workoutTitle }
                title={ workout.workoutTitle }
                description={ workout.description }
                url={ workout.exampleURL }
                bodyParts={
                    workout.bodyParts.map(bodyPart => bodyPart.fields)
                }
            />
        </div>
    ))
)

export default WorkoutList;
