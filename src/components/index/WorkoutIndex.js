import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkoutCard from '../common/WorkoutCard'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        display: 'flex',
        alignItems: 'stretch',
        alignContent: 'stretch',
    }
})

const WorkoutIndex = ({ workouts, classes }) => (
    <div className={ classes.root }>
        <Grid 
            container 
            spacing={ 16 }
            className={ classes.cardGrid }
        >
            { workouts.map(workout => (
                <Grid 
                    item 
                    key={ workout.id }
                    xs={ 12 }
                    sm={ 6 }
                    md={ 4 }
                >
                    <WorkoutCard
                        workout={ workout }
                    />
                </Grid>
            ))}
        </Grid>
    </div>
)

export default withStyles( styles )( WorkoutIndex )
