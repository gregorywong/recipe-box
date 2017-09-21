import React from 'react';

const RecipeFooter = (props) => {
  const {editing, startEditing, cancelEditing, deleteRecipe} = props;
  return (
    <ul className='ingredients-list list-group list-group-flush' >
      <li className='list-group-item'>
        {
          !editing &&
          <div className="row">
            <div className="col-6 text-center">
              <button className="btn btn-warning" onClick={startEditing}>Edit</button>
            </div>
            <div className="col-6 text-center">
              <button className="btn btn-danger" onClick={deleteRecipe}>Delete</button>
            </div>
          </div>
        }
        {
          editing &&
          <div className="row">
            <div className="col-6 text-center">
              <button className="btn btn-success">Save</button>
            </div>
            <div className="col-6 text-center">
              <button className="btn btn-danger" onClick={cancelEditing}>Cancel</button>
            </div>
          </div>
        }
      </li>
    </ul>
  )
}

export default RecipeFooter;
