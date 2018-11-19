import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IndexSearch from './IndexSearch'
import IndexFilter from './IndexFilter'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%'
    },
    grow: {
        flexGrow: 1,
    }
})

const IndexAppBar = ({ 
    title, 
    query, 
    filter, 
    anchor, 
    onChange, 
    onClick, 
    handleOpen,
    handleClose,
    classes 
}) => (
    <AppBar 
        position="static" 
        className={ classes.root }
    > 
        <Toolbar>
            <Typography
                variant="h5" 
                color="inherit"
            >
                { title }
            </Typography>
            <div className={ classes.grow } />
            <IndexSearch 
                query={ query }
                filter={ filter }
                onChange={ onChange }
            />
            <IndexFilter
                filter={ filter } 
                anchor={ anchor }
                onClick={ onClick }
                handleOpen={ handleOpen }
                handleClose={ handleClose }
            />
        </Toolbar>
    </AppBar>
)

export default withStyles( styles )( IndexAppBar )
