import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IndexSearch from './IndexSearch'
import IndexFilter from './IndexFilter'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    grow: {
        flexGrow: 1,
    }
})

const IndexAppBar = ({ title, query, filter, onChange, onSelect, classes }) => (
    <AppBar 
        position="static" 
        className={ classes.appBar }
    > 
        <Toolbar>
            <Typography
                variant="h5" 
                color="inherit"
            >
                { title }
            </Typography>
        </Toolbar>
        <div className={ classes.grow } />
        <IndexSearch 
            query={ query }
            onChange={ onChange }
        />
        <IndexFilter
            filter={ filter } 
            onSelect={ onSelect } 
        />
    </AppBar>
)

export default withStyles( styles )( IndexAppBar )
