import React from 'react';
import './Filter.css';

class Filter extends React.Component{
  render(){
    return (
      <div className='filterDiv'>
        <form>
          <label htmlFor='print-type'>Print Type</label>
          <select 
          id='print-type'
          name='print-type'>
          <option value='all'>All</option>
          </select> 

          <label htmlFor='book-type'>Book Type</label>
          <select 
          id='book-type'
          name='book-type'>
          <option value='no-filter'>No Filter</option>
          </select> 
        </form>
      </div>
    )
  }
}


export default Filter;