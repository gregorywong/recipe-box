import React from 'react';

export default class Recipe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hidden: false
    }
  }

  render() {
    const {name, ingredients, recipeKey} = this.props;
    return (
      <div className="col-12 col-xs-6 col-md-4 col-lg-3 pb-4">
        <div className="card recipe-card">
          <a data-toggle="collapse" href={`#recipe${recipeKey}`} className="text-danger">
            <div className="card-block">
              <h4 className='text-center p-3 mb-0 recipe-title'>{name}</h4>
            </div>
          </a>
          {
            !this.state.hidden &&
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
        </div>
      </div>
    )
  }
}