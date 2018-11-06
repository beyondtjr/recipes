import React, { Component } from 'react';

class Recipes extends Component {
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
        },
        {
             id: 4,
             name: 'Shrimp Burrito',
             ingredients: ['Shrimp', 'Tortilla']
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
          <div className="RecipeNames"> {recipe.name} </div>
            <div className="ingredientsList">
            {recipe.ingredients.map(el => <ul>{el}</ul>)}
            </div>
        </div>
      )
    })
    return (
      <div className="Recipe">
        {recipesList}
      </div>
    );
  }
}

export default Recipes;
