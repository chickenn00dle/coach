import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Frame from './Frame'
import Markdown from './Markdown'

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        [theme.breakpoints.up(1200 + theme.spacing.unit * 2 * 2)]: {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    frame: {
        marginBottom: theme.spacing.unit * 3,
    },
})

const Workout = ({ workout, classes }) => {
    return (
        <div className={ classes.root }>
            <Grid
                container
                spacing={ 16 }
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
                <Frame 
                    title={ workout.workoutTitle }
                    exampleURL={ workout.exampleURL } 
                    className={ classes.frame }
                />
                <Markdown text={ workout.description } />
            </Grid>
        </div>
    )
}

export default withStyles( styles)( Workout )
