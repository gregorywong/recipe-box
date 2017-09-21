import React from 'react';

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      newName: '',
      newIngredients: ''
    }
  }

  render() {
    const { name, ingredients, recipeKey } = this.props;
    const {editing, newName, newIngredients} = this.state;
    return (
      <div className="col-12 col-xs-6 col-md-4 col-lg-3 pb-4">
        <div className="card recipe-card">
          {
            !editing &&
            <a data-toggle="collapse" href={`#recipe${recipeKey}`} className="text-danger">
              <div className="card-block">
                <h4 className='text-center p-3 mb-0 recipe-title'>{name}</h4>
              </div>
            </a>
          }
          {
            editing &&
            <div className="card-block">
              <h4 className='text-center p-3 mb-0 recipe-title'>
                <input type="text" className="p-2 w-100" value={name} />
              </h4>
            </div>
          }
          {
            !editing &&
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
          }
          {
            editing &&
            <ul className='ingredients-list list-group list-group-flush' id={`recipe${recipeKey}`}>
              <li className='list-group-item'>
                <input type="text" className="p-2 w-100" value={ingredients} />
              </li>
            </ul>
          }

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
        </div>
      </div>
    )
  }
}