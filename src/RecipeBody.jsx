import React from 'react';

const RecipeBody = (props) => {
  const { editing, ingredients, recipeKey } = props;
  if (editing) {
    return (
      <ul className='ingredients-list list-group list-group-flush'>
        <li className='list-group-item'>
          <input type="text" className="p-2 w-100" value={ingredients} />
        </li>
      </ul>
    )
  }
  else {
    return (
      <ul className='ingredients-list list-group list-group-flush collapse' id={`recipe${recipeKey}`}>
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
    )
  }
}

export default RecipeBody;