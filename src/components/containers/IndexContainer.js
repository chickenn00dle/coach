import React from 'react'
import { connect } from 'react-redux'
import Select from '../index/Select'
import WorkoutIndex from '../index/WorkoutIndex'
import { filterTypes } from '../../actions/Actions'
import UpdateSearchQuery from '../../actions/SearchActions'
import IndexAppBar from '../index/IndexAppBar'

// Helper function. Search array for specific string value
const searchForString = ( array, string ) => {
    return array.some( index => index.fields.bodyParts.toLowerCase().includes( string.toLowerCase() ) )
}

// Filter function for search. Filter workouts based on either body part or name
const filterWorkouts = ( allWorkouts, searchQuery, searchFilter ) => {
    if ( searchQuery.trim().length > 0 ) {
        switch ( searchFilter ) {
            case filterTypes.BODY_PART: 
                return allWorkouts.filter( workout => searchForString( workout.bodyParts, searchQuery.trim() ) )
            default: 
                return allWorkouts.filter( workout => workout.workoutTitle.toLowerCase().includes( searchQuery.trim().toLowerCase() ) )
        }
    }
    return allWorkouts
}

const mapStateToProps = ( state ) => {
    return {
        workouts: filterWorkouts(state.workouts, state.query, state.filter),
        filter: state.filter,
    }
}

const mapDispatchToProps = ( dispatch ) => ({
    onChange: text => { dispatch ( UpdateSearchQuery ( text ) )}
})

const IndexContainer = ({ classes, ...props }) => (
    <div> 
        <IndexAppBar 
            title={ process.env.REACT_APP_NAME }
            query={ props.query }
            onChange={ props.onChange }
        />
        <Select filter={ props.filter } />
        <WorkoutIndex workouts={ props.workouts } />
    </div>
)


export default connect( mapStateToProps, mapDispatchToProps )( IndexContainer )
