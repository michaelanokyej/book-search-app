import React from 'react';
import './App.css';
import Search from './Search';
import Filter from './Filter';
import Books from './Books';

function App() {
  return (
    <div className="App">
      <header >
        <h1 className='appHeader'>Google Book Search</h1>
      </header>
      <Search />
      <Filter />
      <Books />
    </div>
  );
}

export default App;
