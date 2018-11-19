import React from 'react'
import { filterTypes } from '../../actions/Actions'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

const styles = theme => ({
    root: {
        width: 'auto',
        marginRight: theme.spacing.unit * 3,
        borderBottom: 'none',
    }
})

const IndexFilter = ({ filter, onSelect, classes }) => {
    return (
        <div className={ classes.root }>
            <FormControl className={ classes.formControl }>
                <NativeSelect
                    value={ filter }
                    onChange={ onSelect }
                >
                    <option value={ filterTypes.WORKOUT_TITLE }>Title</option>
                    <option value={ filterTypes.BODY_PART }>Body Part</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default withStyles( styles )( IndexFilter )
