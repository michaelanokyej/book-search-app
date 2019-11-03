import React from "react";
import './Search.css'

const Search = () => {
  return (
    <div className='searchDiv'>
      <label htmlFor="book">Search:</label>
      <input type="text" 
      name="book" 
      id="book" 
      placeholder="henry" />
      <button>Search</button>
    </div>
  );
};

export default Search;
