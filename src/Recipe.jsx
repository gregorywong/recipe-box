import React from 'react';
import RecipeHeader from './RecipeHeader.jsx';
import RecipeBody from './RecipeBody.jsx';
import RecipeFooter from './RecipeFooter.jsx';

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      newName: '',
      newIngredients: ''
    }
  }

  toggleEditing = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    const { name, ingredients, recipeKey } = this.props;
    const {editing, newName, newIngredients} = this.state;
    return (
      <div className="col-12 col-xs-6 col-md-4 col-lg-3 pb-4">
        <div className="card recipe-card">
          <RecipeHeader editing={editing} name={name} recipeKey={recipeKey}/>

          <RecipeBody editing={editing} ingredients={ingredients} recipeKey={recipeKey}/>

          <RecipeFooter editing={editing} recipeKey={recipeKey} toggleEditing={this.toggleEditing}/>

        </div>
      </div>
    )
  }
}