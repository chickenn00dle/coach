import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutCard = ({ workout }) => ( 
    <div>
        <Link
            to={ `/workout/${ workout.id }` }
        >
            <h2>{ workout.workoutTitle }</h2>
        </Link>
    </div>
)

export default WorkoutCard
