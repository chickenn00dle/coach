import React from 'react';
import { Frame } from './Frame';
import Markdown from './Markdown';

const Preview = ({ workout }) => {
    return (
        <div>
            <h2>{ workout.workoutTitle }</h2>
            <Frame 
                title={ workout.workoutTitle }
                exampleURL={ workout.exampleURL } 
            />
            <Markdown text={ workout.description } />
        </div>
    )
}

export default Preview;
