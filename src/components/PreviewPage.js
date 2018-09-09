import React from 'react';
import { connect } from 'react-redux';
import Button from './common/Button';
import Preview from './preview/Preview';

const mapStateToProps = (state, ownProps) => {
    const ID = parseInt(ownProps.match.params.id, 10);
    const filtered = state.workouts.filter( workout => workout.id === ID);
    const preview = filtered.length > 0 ? filtered[0] : {}; 
    return {
        workout: preview
    }
}

const PreviewPage = props => (
    <div>
        <Preview
            workout={ props.workout }
        />
        <Button
            to='/'
            text='Back'
        />
    </div>
);

export default connect(mapStateToProps)(PreviewPage);
