import React from 'react';

const RecipeHeader = (props) => {

  const {editing, name, recipeKey} = props;

  if (editing) {
    return (
      <div className="card-block">
        <h4 className='text-center p-3 mb-0 recipe-title'>
          <input type="text" className="p-2 w-100" value={name} />
        </h4>
      </div>
    )
  }
  else {
    return (
      <a data-toggle="collapse" href={`#recipe${recipeKey}`} className="text-danger">
        <div className="card-block">
          <h4 className='text-center p-3 mb-0 recipe-title'>{name}</h4>
        </div>
      </a>
    )
  }
}

export default RecipeHeader;