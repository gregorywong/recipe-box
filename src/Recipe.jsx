import React from 'react';
import RecipeHeader from './RecipeHeader.jsx';
import RecipeBody from './RecipeBody.jsx';
import RecipeFooter from './RecipeFooter.jsx';

const defaultCollapsed = false; // this is for color only. Try not to change this, as the collapsing and showing is controlled by Javascript and not state

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      collapsed: defaultCollapsed,
      newName: '',
      newIngredients: ''
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  
  toggleEditing = () => {
    this.setState({
      editing: !this.state.editing,
      collapsed: defaultCollapsed
    })
  }

  render() {
    const { name, ingredients, recipeKey, deleteRecipe } = this.props;
    const {editing, collapsed, newName, newIngredients} = this.state;
    const recipeCardState = collapsed ? 'recipe-card-collapsed' : 'recipe-card-showing';
    return (
      <div className="col-12 col-xs-6 col-md-4 col-lg-3 pb-4">
        <div className={`card recipe-card ${recipeCardState}`}>
          <RecipeHeader editing={editing} toggleCollapsed={this.toggleCollapsed} name={name} recipeKey={recipeKey}/>

          <RecipeBody editing={editing} ingredients={ingredients} recipeKey={recipeKey}/>

          <RecipeFooter editing={editing} recipeKey={recipeKey} toggleEditing={this.toggleEditing} deleteRecipe={deleteRecipe}/>

        </div>
      </div>
    )
  }
}