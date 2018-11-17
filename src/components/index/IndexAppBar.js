import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IndexSearch from './IndexSearch'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

const IndexAppBar = ({ title, query, onChange, classes }) => (
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
        <IndexSearch 
            query={ query }
            onChange={ onChange }
        />
    </AppBar>
)

export default withStyles( styles )( IndexAppBar )
