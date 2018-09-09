import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutPreview = ({ workout }) => ( 
    <div>
        <Link
            to={`/preview/${workout.id}`}
        >
            <h2>{ workout.workoutTitle }</h2>
        </Link>
    </div>
);

export default WorkoutPreview;
