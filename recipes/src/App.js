import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {
            id: 1,
            name: 'Adobada Taco',
            ingredients: ['Adobada ', 'Tortilla ', 'Cilantro ', 'Guacamole ', 'Lime ', 'Chopped Onions ', 'Pico ']

        },
        {
             id: 2,
             name: 'Carne Asada Fries',
             ingredients: ['French Fries', 'Carne Asada', 'Mexican Cheese', 'Sour Cream', 'Guacamole']
        },
        {
             id: 3,
             name: 'Magic Burrito',
             ingredients: ['Magic', 'Tortilla']
        }
      ]
    }
  }

  render() {
    let recipesList = this.state.recipes.map((recipe, id) => {

      let styles = {
        backgroundImage: 'url(' + `${recipe.image}` + ')'
      }
      return (
        <div id={recipe.id} className="RecipeList" >
          <ul> {recipe.name}:
            {recipe.ingredients.map(el => <li>{el}</li>)}
          </ul>
        </div>
      )
    })
    return (
      <div>
        <div className="Header"> <Header /> </div>
        <h1>

        </h1>
        <div className="Recipe"><Recipe recipes={this.recipesList}/>
          <div>{recipesList}</div>
        </div>
          <div className="Footer"> <Footer /> </div>
      </div>
    );


  }
}


export default App;
