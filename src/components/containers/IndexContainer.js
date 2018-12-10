import React from 'react'
import { connect } from 'react-redux'
import { filterTypes } from '../../actions/Actions'
import Loading from '../common/Loading'
import WorkoutIndex from '../index/WorkoutIndex'
import SetFilterType from '../../actions/FilterTypeActions'
import SetAnchor from '../../actions/AnchorActions'
import UpdateSearchQuery from '../../actions/SearchActions'
import IndexAppBar from '../index/IndexAppBar'

// Helper function. Search array for specific string value
const searchForString = ( array, string ) => {
    return array.some( index => index.fields.bodyParts.toLowerCase().includes( string.toLowerCase() ) )
}

// Filter function for search. Filter workouts based on either body part or name
const filterWorkouts = ( allWorkouts, searchQuery, searchFilter ) => {
    if ( searchQuery.trim().length > 0 ) {
        switch ( searchFilter ) {
            case filterTypes.BODY_PART: 
                return allWorkouts.filter( workout => searchForString( workout.bodyParts, searchQuery.trim() ) )
            default: 
                return allWorkouts.filter( workout => workout.workoutTitle.toLowerCase().includes( searchQuery.trim().toLowerCase() ) )
        }
    }
    return allWorkouts
}

const mapStateToProps = ( state ) => {
    return {
        workouts: filterWorkouts(state.workouts, state.query, state.filter),
        loading: state.loading,
        filter: state.filter,
        anchor: state.anchor,
    }
}

const mapDispatchToProps = ( dispatch ) => ({
    onChange: text => dispatch ( UpdateSearchQuery ( text ) ),
    onClick: item => dispatch( SetFilterType ( item ) ),
    handleOpen: event => dispatch( SetAnchor ( event.currentTarget ) ),
    handleClose: () => dispatch( SetAnchor ( null ) ),
})

const IndexContainer = ({ classes, ...props }) => (
    <div> 
        <IndexAppBar 
            title={ process.env.REACT_APP_NAME }
            query={ props.query }
            filter={ props.filter } 
            anchor={ props.anchor }
            onChange={ props.onChange }
            onClick={ props.onClick }
            handleOpen={ props.handleOpen }
            handleClose={ props.handleClose }
        />
        { props.loading && 
            <WorkoutIndex workouts={ props.workouts } />
        }
        { ! props.loading && 
            <Loading />
        }
    </div>
)


export default connect( mapStateToProps, mapDispatchToProps )( IndexContainer )
