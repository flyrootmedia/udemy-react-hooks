import './SearchBar.css';

import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [terms, setTerms] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(terms);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <label htmlFor="searchBar">Search for Videos on YouTube</label>
                <input 
                    type="text" 
                    id="searchBar" 
                    placeholder="Enter keywords" 
                    value={terms} 
                    onChange={(e) => setTerms(e.target.value)}
                />
            </form>
        </div>
    )
};

export default SearchBar;