import React from 'react';
import { connect } from 'react-redux';
import Button from './common/Button';
import Preview from './preview/Preview';

const mapStateToProps = ( state, ownProps ) => {
    console.log(state)
    const ID = parseInt(ownProps.match.params.id, 10);
    return {
        workout: state.workouts.find( workout => parseInt(workout.id, 10) === parseInt(ID, 10))
    }
}

const PreviewPage = ({ workout }) => (
    <div>
        <Button
            to='/'
            text='<<<'
        />
        <Preview
            workout={ workout }
        />
    </div>
);

export default connect(mapStateToProps)(PreviewPage);
