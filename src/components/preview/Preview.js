import React from 'react';
import { Frame } from './Frame';
import { Markdown } from './Markdown';

const Preview = ({ workout }) => {
    console.log(typeof workout.description);
    return (
        <div>
            <h2>{ workout.workoutTitle }</h2>
            <Frame exampleURL={ workout.exampleURL } />
            <Markdown text={ workout.description } />
        </div>
    )
}

export default Preview;
