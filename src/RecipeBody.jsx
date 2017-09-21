import React from 'react';

const RecipeBody = (props) => {
  const { editing, ingredients, newIngredients, handleIngredientsChange, recipeID } = props;
  if (editing) {
    return (
      <ul className='ingredients-list list-group list-group-flush'>
        <li className='list-group-item'>
          <div className="mb-2">Separate items with commas (,)</div>
          <textarea className="form-control py-2 w-100" rows="4" value={newIngredients} onChange={handleIngredientsChange}/>
        </li>
      </ul>
    )
  }
  else {
    return (
      <div id={`recipe${recipeID}`} className='collapse show'>
        <ul className='ingredients-list list-group list-group-flush' >
          {
            ingredients.trim() === '' &&
            <li className='list-group-item text-danger'>No ingredients!</li>
          }
          {
            ingredients !== '' &&
            React.Children.map(ingredients.split(','), ingredient => {
              return (
                <li className='list-group-item'>{ingredient}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default RecipeBody;