import React from 'react';
import Button from './common/Button';

const IndexPage = () => (
    <div>
        <h2>Let's Get Started</h2>
        <p>
            Select from the list of workout below:
        </p>
        <Button
            to='/customize'
            text='Customize'
        />
    </div>
);

export default IndexPage;
