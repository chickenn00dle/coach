import React from 'react';
import { connect } from 'react-redux';
import SetFilterType from '../../actions/FilterTypeActions';
import { filterTypes } from '../../actions/Actions';

const mapStateToProps = ( state ) => ({
    active: state.filter 
})

const mapDispatchToProps = ( dispatch ) => ({
    onChange: event => dispatch( SetFilterType( event.target.value ) )
});

const Select = ({ active, onChange }) => {
    return (
        <div>
            <select 
                value={ active }
                onChange={ onChange }
            >
                <option value={ filterTypes.WORKOUT_TITLE }>Title</option>
                <option value={ filterTypes.BODY_PART }>Body Part</option>
            </select>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Select )
