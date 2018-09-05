import React from 'react';
import { connect } from 'react-redux';
import WorkoutList from './index/WorkoutList';
import Button from './common/Button';

const mapStateToProps = (state, ownProps) => {
    return {
        workouts: state.workouts
    }
}

const IndexPage = props => (
    <div>
        <WorkoutList
            workouts={ props.workouts }
        />
        <Button
            to='/customize'
            text='Customize'
        />
    </div>
);

export default connect(mapStateToProps)(IndexPage);
