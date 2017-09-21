import React from 'react';
import Recipe from './Recipe.jsx';

const image = require('./images/hat.svg');

const localStorageName = "_gregorywong_recipe-box";

var dummyData = [
  {
    name: 'Hamburgers',
    ingredients: 'Buns,Meat,Lettuce'
  },
  {
    name: 'French Fries',
    ingredients: 'Potato,Oil,Ketchup'
  },
  {
    name: 'Salad',
    ingredients: 'Salad,Salad Dressing'
  },
  {
    name: 'Spamburgers',
    ingredients: 'Buns,Spam Meat,Lettuce'
  },
  {
    name: 'Super Mario Salad',
    ingredients: 'Salad,Salad Dressing,Cherry tomatoes,Pipe Dreams'
  },
  {
    name: 'Invisible Salad',
    ingredients: ',,,'
  },
  {
    name: 'Empty Stomach',
    ingredients: ''
  },
  {
    name: 'Disneyland Burger with Extra Large Fries',
    ingredients: 'Buns,Meat,Lettuce'
  },
  {
    name: 'Coke',
    ingredients: 'Sugar,Water'
  }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const data = JSON.parse(window.localStorage.getItem(localStorageName));
    this.state = {
      // recipes: (data !== null) ? data : dummyData
      // testing:
      recipes: dummyData
    }
  }

  deleteRecipe = (recipeNum) => {
    return () => {
      const { recipes } = this.state;
      recipes.splice(recipeNum, 1); // remove one recipe at index recipeNum
      this.setState({
        recipes
      }, () => {
        window.localStorage.setItem(localStorageName, JSON.stringify(recipes));
      })
    }
  }

  render() {
    const {recipes} = this.state;
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
            <button className="btn btn-primary">Add Item</button>
          </div>
        </div>
        <hr className="mb-0" />
        <div className="container box">
          <div className="row pt-4">
            {
              recipes.map((recipe, i) => {
                return <Recipe {...recipe} key={i} recipeKey={i} deleteRecipe={this.deleteRecipe(i)} />;
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