import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    link: {
        color: theme.palette.primary[50],
    }
})

const WorkoutAppBar = ({ to, title, classes }) => (
    <AppBar position="static">
        <Toolbar variant="dense">
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
