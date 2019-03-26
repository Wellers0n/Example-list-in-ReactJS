import React, { Component, useState } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'
import helpFilter from './../helpers/filter'

const App = () => {
  const [searchString, setSearchString] = useState('')
  const recipesItems = recipes.results

  const setValue = (value) => {
    setSearchString(value);
  }
 
  return (
    <div className="App">
      <Navbar setValue={setValue} value={searchString} />
      <div className="container mt-10">
        <div className="row">
          {
            helpFilter(recipesItems, searchString, RecipeItem)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
