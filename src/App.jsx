import React from 'react';
import Recipe from './Recipe.jsx';

const image = require('./images/hat.svg');

const localStorageName = "_gregorywong_recipe-box";

let dummyData = [
  {
    name: 'Spamburgers',
    ingredients: 'Buns,Spam Meat,Lettuce'
  },
  {
    name: 'Invisible Salad',
    ingredients: ',,,'
  },
  {
    name: 'Super Mario Salad',
    ingredients: 'Salad,Salad Dressing,Cherry Tomatoes,Pipe Dreams'
  },
  {
    name: 'Empty Stomach',
    ingredients: ''
  }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    let data = JSON.parse(window.localStorage.getItem(localStorageName));
    if (data === null) {
      data = dummyData;
    }

    // reset recipeIDs
    data = data.map((recipe, i) => {
      return Object.assign(
        {},
        recipe,
        { id : i }
      );
    })

    this.state = {
      recipes: data
    }
    this.lastItemID = this.state.recipes.length;
  }

  modifyRecipe = (recipeID) => {
    return (newName, newIngredients) => {
      let recipes = this.state.recipes.map(recipe => {
        if (recipe.id === recipeID) {
          return Object.assign(
            {},
            recipe,
            {
              name: newName,
              ingredients: newIngredients
            }
          );
        }
        return recipe;
      });
      this.updateRecipes(recipes);
    }
  }

  deleteRecipe = (recipeID) => {
    return () => {
      let recipes = this.state.recipes.filter(recipe => {
        return recipe.id !== recipeID
      })
      this.updateRecipes(recipes);
    }
  }

  addRecipe = () => {
    let newRecipe = {
      id: this.lastItemID++,
      name: '',
      ingredients: ''
    };
    let recipes = this.state.recipes.slice();
    recipes.splice(0, 0, newRecipe);
    this.updateRecipes(recipes);
  }

  updateRecipes = (recipes) => {
    this.setState({
      recipes
    }, () => {
      window.localStorage.setItem(localStorageName, JSON.stringify(recipes));
    })
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <header className="text-center py-1">
          <h1 className="py-3 mb-0">
            <img src={image} className="chef-hat" />
            <span className="px-3">RECIPE BOX</span>
            <img src={image} className="chef-hat hidden-xs-down" />
          </h1>
          <div className="mx-2 pb-2">
            Created by <a href="http://www.gregwong.me" className='text-danger'>Greg Wong</a>
          </div>
        </header>
        <div className="row justify-content-center">
          <div className="col-12 text-center pb-2">
            Click on the item names to expand or collapse.
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={this.addRecipe}>Add Item</button>
          </div>
        </div>
        <hr className="mb-0" />
        <div className="container box">
          <div className="row pt-4">
            {
              recipes.map((recipe) => {
                const id = recipe.id;
                return <Recipe
                  {...recipe}
                  key={id}
                  recipeID={id}
                  modifyRecipe={this.modifyRecipe(id)}
                  deleteRecipe={this.deleteRecipe(id)}
                />;
              })
            }
            {
              recipes.length === 0 &&
              <h2 className="w-100 p-5 text-danger text-center">No items yet! Try adding one!</h2>
            }
          </div>
        </div>
      </div>
    )
  }
}