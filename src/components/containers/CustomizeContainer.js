import React from 'react'
import Button from '../common/Button'

const CustomizeContainer = () => (
    <div>
        <h2>Workout Will Go Here</h2>
        <p>We're super excited for what's coming!</p>
        <Button
            to='/share'
            text='Finish'
        />
    </div>
)

export default CustomizeContainer
