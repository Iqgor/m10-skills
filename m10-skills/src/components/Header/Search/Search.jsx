import React, { useState } from 'react';
import './search.css';




function Search() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
        <button className="search-toggle" onClick={toggleSearch}>
          {isSearchOpen ? <i class="fa-solid fa-x"></i> : <i className="fa-solid fa-magnifying-glass"></i> }
        </button>
        <input type="text" className="search-input" placeholder="Zoek binnen de gemeente" />
      </div>

    )
}


export default Search