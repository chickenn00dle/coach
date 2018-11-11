import React from 'react';

const SearchBar = ({ query, onChange }) => {
    let input;
    return (
        <div>
            <input ref={ node => input = node } 
                   type="text" 
                   value={ query } 
                   onChange={ e => { onChange ( input.value ) } }
            />
        </div>
    )
}

export default SearchBar;
