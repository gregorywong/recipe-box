import React from 'react';

const RecipeFooter = (props) => {
  const {editing} = props;
  return (
    <ul className='ingredients-list list-group list-group-flush' >
      <li className='list-group-item'>
        {
          !editing &&
          <div className="row">
            <div className="col-6 text-center">
              <button className="btn btn-warning">Edit</button>
            </div>
            <div className="col-6 text-center">
              <button className="btn btn-danger">Delete</button>
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
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        }
      </li>
    </ul>
  )
}

export default RecipeFooter;
