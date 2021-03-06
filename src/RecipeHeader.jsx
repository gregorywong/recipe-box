import React from 'react';

const RecipeHeader = (props) => {

  const {editing, name, newName, recipeID, toggleCollapsed, handleNameChange} = props;

  if (editing) {
    return (
      <div className="card-block">
        <h4 className='text-center p-3 mb-0 recipe-title'>
          <textarea className="form-control" rows="1" value={newName} onChange={handleNameChange}/>
        </h4>
      </div>
    )
  }
  else {
    return (
      <a data-toggle="collapse" href={`#recipe${recipeID}`} className="text-danger" onClick={toggleCollapsed}>
        <div className="card-block">
          <h4 className='text-center p-3 mb-0 recipe-title'>{name}</h4>
        </div>
      </a>
    )
  }
}

export default RecipeHeader;