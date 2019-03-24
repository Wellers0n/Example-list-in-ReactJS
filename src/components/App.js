import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'
// const [value, setValue] = useState('')

class App extends Component {
  constructor(props) {
    super(props);
    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  getValue = (value) =>{
    this.setState({ searchString: value });
  }

  render() { 
    return (
      <div className="App">
        <Navbar getValue={this.getValue} value={this.state.searchString} />
        <div className="container mt-10">
          <div className="row">
            {
              this.recipes.map((recipe, index) => {
                if(recipe.title === this.state.searchString ||
                  recipe.ingredients === this.state.searchString ||
                  '' === this.state.searchString){
                      return <RecipeItem key={index} />
                }
              })
            }
          </div>
        </div>
        <div>aqui: {this.state.searchString}</div>

      </div>
    );
  }
}

export default App;
