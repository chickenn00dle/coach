import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%',
    },
    toolbar: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
            width: 1200,
            margin: 'auto',
        },
    },
    link: {
        color: theme.palette.primary[50],
        marginBottom: theme.spacing.unit * -.5,
    },
})

const WorkoutAppBar = ({ to, title, classes }) => (
    <AppBar 
        position="static"
        className={ classes.root } 
    >
        <Toolbar 
            variant="dense"
            className={ classes.toolbar } 
        >
            <IconButton>
                <Link 
                    to={ to } 
                    className={ classes.link }
                >
                    <ChevronLeft />
                </Link>
            </IconButton>
            <Typography
                variant="h6"
                color="inherit"
            >
                { title }
            </Typography>
        </Toolbar>
    </AppBar>
)

export default withStyles( styles )( WorkoutAppBar )
