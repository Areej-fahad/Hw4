import React, { useState } from 'react';
import Courses from './Courses';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    Courses => {
      return (
         Courses.name
      );

     const handleChange = e => {
        setSearchField(e.target.value);
      };