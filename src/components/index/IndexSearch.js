import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    searchBar: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        left: - theme.spacing.unit * 2,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        transition: theme.transitions.create('width'),
        width: 100,
        '&:focus': {
            width: 120,
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing.unit * 6,
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
})

const IndexSearch = ({ 
    query, 
    filter,
    onChange, 
    classes 
}) => { 
    const placeholder = filter === 'WORKOUT_TITLE' ? 'Workout Title' : 'Body Part'
    return (
        <div className={ classes.searchBar }>
            <div className={ classes.searchIcon }>
                <SearchIcon />
            </div>
            <InputBase
                placeholder={ placeholder }
                type="text" 
                value={ query } 
                onChange={ (e) => onChange( e.target.value ) }
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    )
}

export default withStyles( styles )( IndexSearch )
