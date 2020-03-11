import React from 'react'
import { filterTypes } from '../../actions/Actions'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FilterList from '@material-ui/icons/FilterList'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const styles = () => ({
    root: {
        width: 'auto',
    }
})

const IndexFilter = ({ 
    anchor, 
    onClick, 
    handleOpen, 
    handleClose,
    classes 
}) => {
    return (
        <div className={ classes.root }>
            <IconButton
                aria-owns={ anchor ? 'menu-filter' : undefined }  
                aria-haspopup="true"
                color="inherit"
                onClick={ handleOpen }
            >
                <FilterList />
            </IconButton>
            <Menu
                id='menu-filter' 
                anchorEl={ anchor }
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={ anchor ? true : false }
            >
                <MenuItem onClick={ () => { onClick( filterTypes.WORKOUT_TITLE ); handleClose() }}>By Title</MenuItem>
                <MenuItem onClick={ () => { onClick( filterTypes.BODY_PART ); handleClose() }}>By Part</MenuItem>
            </Menu>
        </div>
    )
}

export default withStyles( styles )( IndexFilter )
