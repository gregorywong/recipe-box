import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <header className="text-center">
          <h1 className="py-4">React Bootstrap Template</h1>
          <div className="mx-2 pb-2 mb-4">
            <p>This is a working webpack project with React and Bootstrap configurations.</p>
          </div>
        </header>
        <div className="container">
          <h2>Hello World!</h2>
          <div>Some content goes here.</div>
          <br/>
          <h2>Some Other Title</h2>
          <div>Blah blah blah.</div>
        </div>
      </div>
    )
  }
}