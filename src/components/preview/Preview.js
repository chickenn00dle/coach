import React from 'react';
import marked from 'marked';

const Preview = ({ workout }) => {
    console.log(typeof workout.description);
    return (
        <div>
            <h2>{ workout.workoutTitle }</h2>
            <p>{ workout.description }</p>
        </div>
    )
}

const convertMarkdown = (text) => {
    const converted = marked(text,{
        sanitize: true,
    });
    return {
        __html: converted
    }
}

export default Preview;
