import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
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
    table: {
        width: '50%',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit,
    }
})

const Workout = ({ workout, classes }) => {
    const value = 1 
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
                >
                    <Tabs 
                        value={ value }
                        textColor="primary"
                        indicatorColor="primary"
                        fullWidth
                    >
                        <Tab label="Description" />
                        <Tab label="More" />
                    </Tabs>
                    { value === 0 &&
                        <Markdown text={ workout.description } />
                    }
                    { value === 1 &&
                        <Table className={ classes.table }>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Weight</TableCell>
                                    <TableCell numeric>{ workout.weight }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Reps</TableCell>
                                    <TableCell numeric>{ workout.reps }</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    }
                </Paper>
            </Grid>
        </div>
    )
}

export default withStyles( styles )( Workout )
