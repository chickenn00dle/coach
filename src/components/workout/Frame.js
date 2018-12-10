import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%',
        position: 'relative',
        paddingTop: '56.5%',
        overflow: 'hidden',
        marginBottom: theme.spacing.unit * 2,
        backgroundColor: theme.palette.primary[ 900 ],
        borderRadius: '5px',
        boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
                    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 3px 1px -2px rgba(0, 0, 0, 0.12)`
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    }
})

const Frame = ({ title, exampleURL, classes }) => {
    return (
        <div className={ classes.root }>
            <iframe
                title={ title }
                src={ exampleURL }
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={ classes.iframe }
            ></iframe>
        </div>
    )
}

export default withStyles( styles )( Frame )
