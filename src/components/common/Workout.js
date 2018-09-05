import React from 'react';

const Workout = props => (
    <div>
        <h2>{ props.title }</h2>
        <iframe src={ props.url } frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
        <p>{ props.description }</p>
        <ul>
            { props.bodyParts.map(bodyPart => <li key={ bodyPart.bodyParts }>{ bodyPart.bodyParts }</li>) }
        </ul>
    </div>
);

export default Workout;
