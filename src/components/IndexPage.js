import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './index/Search';
import WorkoutList from './index/WorkoutList';
import Button from './common/Button';
import updateSearchQuery from '../actions/SearchActions'; 

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.workouts,
        query: state.query
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
