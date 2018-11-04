import React from 'react'

export const Frame = ({ exampleURL }) => {
    return (
        <iframe
            src={ exampleURL }
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}
