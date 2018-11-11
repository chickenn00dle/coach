import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './index/Search';
import Select from './index/Select';
import WorkoutList from './index/WorkoutList';
import { filterTypes } from '../actions/Actions';
import updateSearchQuery from '../actions/SearchActions'; 

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

// Helper function. Search array for specific string
const searchForString = ( array, string ) => {
    return array.some( index => index.fields.bodyParts.toLowerCase().includes( string.toLowerCase() ) )
}

// Map Redux state to props for this Container
const mapStateToProps = (state, ownProps) => {
    return {
        workouts: filterWorkouts(state.workouts, state.query, state.filter),
        filter: state.filter
    }
}

// Map updateSearchQuery action to props for this Container
const mapDispatchToProps = ( dispatch, ownProps ) => ({
    onChange: text => { dispatch ( updateSearchQuery ( text ) )}
})

// Index Page container housing index components
const IndexPage = props => (
    <div>
        <SearchBar
            query={ props.query }
            onChange={ props.onChange }
        />
        <Select 
            filter={ props.filter }
        />
        <WorkoutList
            workouts={ props.workouts }
        />
    </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
