import React from 'react'
import Button from '../common/Button'

const CustomizeContainer = () => (
    <div>
        <h2>Workout Will Go Here</h2>
        <p>We&apos;re super excited for what&apos;s coming!</p>
        <Button
            to='/share'
            text='Finish'
        />
    </div>
)

export default CustomizeContainer
