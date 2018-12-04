import React from 'react'
import { connect } from 'react-redux'
import WorkoutAppBar from '../workout/WorkoutAppBar'
import Workout from '../workout/Workout'

const mapStateToProps = ( state, ownProps ) => {
    const ID = parseInt( ownProps.match.params.id, 10 )
    return {
        workout: state.workouts.find( workout => parseInt( workout.id, 10 ) === parseInt( ID, 10 ))
    }
}

const WorkoutContainer = ({ workout }) => (
    <div>
        <WorkoutAppBar
            to="/"
            title={ workout.workoutTitle }
        />
        <Workout
            workout={ workout }
        />
    </div>
);

export default connect( mapStateToProps )( WorkoutContainer )
