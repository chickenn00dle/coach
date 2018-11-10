import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './index/Search';
import WorkoutList from './index/WorkoutList';
import Button from './common/Button';
import updateSearchQuery from '../actions/SearchActions'; 

const filterWorkouts = ( allWorkouts, searchQuery ) => {
    if ( searchQuery.trim().length > 0 ) {
        return allWorkouts.filter( workout => workout.workoutTitle.toLowerCase().includes( searchQuery.trim().toLowerCase() ) )
    }
    return allWorkouts
}

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: filterWorkouts(state.workouts, state.query)
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    onChange: text => { dispatch ( updateSearchQuery ( text ) )}
})

const IndexPage = props => (
    <div>
        <SearchBar
            query={ props.query }
            onChange={ props.onChange }
        />
        <WorkoutList
            workouts={ props.workouts }
        />
        <Button
            to='/customize'
            text='Customize'
        />
    </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
