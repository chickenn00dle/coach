import React from 'react';

const SearchBar = ({ query, onChange }) => {
    let input;
    return (
        <input ref={ node => input = node } 
               type="text" 
               value={ query } 
               onChange={ e => { onChange ( input.value ) } }
        />
    )
}

export default SearchBar;
