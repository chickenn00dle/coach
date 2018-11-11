import React from 'react'

export const Frame = ({ title, exampleURL }) => {
    return (
        <div>
            <iframe
                title={ title }
                src={ exampleURL }
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
