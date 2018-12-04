import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Frame from './Frame'
import Markdown from './Markdown'

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up(1200 + theme.spacing.unit * 2 * 2)]: {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    details: {
        width: '100%',
        paddingRight: theme.spacing.unit,
    },
})

const Workout = ({ workout, classes }) => {
    const value = 0
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
                <Paper 
                    className={ classes.details }    
                    square
                >
                    <Tabs 
                        value={ value }
                        textColor="primary"
                        indicatorColor="primary"
                        fullWidth
                    >
                        <Tab label="Description" />
                        <Tab label="More" disabled />
                    </Tabs>
                    { value === 0 &&
                        <Markdown text={ workout.description } />
                    }
                </Paper>
            </Grid>
        </div>
    )
}

export default withStyles( styles )( Workout )
