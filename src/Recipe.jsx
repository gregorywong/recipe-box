import React from 'react';
import RecipeHeader from './RecipeHeader.jsx';
import RecipeBody from './RecipeBody.jsx';
import RecipeFooter from './RecipeFooter.jsx';

const defaultCollapsed = false; // this is for color only. Try not to change this, as the collapsing and showing is controlled by Javascript and not state

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
    const {name, ingredients} = props;
    this.state = {
      editing: false,
      collapsed: defaultCollapsed,
      newName: name,
      newIngredients: ingredients
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  
  startEditing = () => {
    this.setState({
      editing: true,
      collapsed: defaultCollapsed
    })
  }

  cancelEditing = () => {
    const {name, ingredients} = this.props;
    this.setState({
      editing: false,
      collapsed: defaultCollapsed,
      newName: name,
      newIngredients: ingredients
    })
  }

  handleNameChange = (e) => {
    this.setState({
      newName: e.target.value
    })
  }

  handleIngredientsChange = (e) => {
    this.setState({
      newIngredients: e.target.value
    })
  }

  handleSaveClicked = () => {
    const {newName, newIngredients} = this.state;
    const {modifyRecipe} = this.props;
    this.setState({
      editing: false,
      collapsed: defaultCollapsed
    }, () => {
      modifyRecipe(newName, newIngredients);
    });
  }

  render() {
    const { name, ingredients, recipeID, deleteRecipe } = this.props;
    const {editing, collapsed, newName, newIngredients} = this.state;
    const recipeCardState = collapsed ? 'recipe-card-collapsed' : 'recipe-card-showing';
    return (
      <div className="col-12 col-xs-6 col-md-4 col-lg-3 pb-4">
        <div className={`card recipe-card ${recipeCardState}`}>
          <RecipeHeader
            editing={editing}
            toggleCollapsed={this.toggleCollapsed}
            name={name}
            newName={newName}
            handleNameChange={this.handleNameChange}
            recipeID={recipeID}
          />

          <RecipeBody
            editing={editing}
            ingredients={ingredients}
            newIngredients={newIngredients}
            handleIngredientsChange={this.handleIngredientsChange}
            recipeID={recipeID}
          />

          <RecipeFooter
            editing={editing}
            startEditing={this.startEditing}
            cancelEditing={this.cancelEditing}
            handleSaveClicked={this.handleSaveClicked}
            deleteRecipe={deleteRecipe}
          />

        </div>
      </div>
    )
  }
}