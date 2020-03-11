import React from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    root: {
        height: '90vh',
    },
})

const Loading = ({ classes }) => (
    <Grid 
        container
        justify="center"
        alignItems="center"
        className={ classes.root }
    >
        <CircularProgress />
    </Grid>
)

export default withStyles( styles )( Loading )
