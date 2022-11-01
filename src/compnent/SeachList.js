import React from 'react';
import Cards from './Cards';
import Card from './Cards';
import Courses from './Courses';

function SearchList({ filteredPersons }) {
  const filtered = filteredCourses.map(filteredCourses =>  <Cards key={Course.id} />); 
  return (
    <div>

      {filtered}
    </div>
  );
}

export default SearchList;