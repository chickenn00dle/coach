import React from 'react';
import Button from './common/Button';

const SharePage = () => (
    <div>
        <h2>Here is your Share Link</h2>
        <p>A page just for share links will go here.</p>
        <Button
            to='/'
            text='Start Over'
        />
    </div>
);

export default SharePage;
