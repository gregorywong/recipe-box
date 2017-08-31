import React from 'react';

const startingText = 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Greg Wong](http://www.gregwong.me)*';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputText: startingText,
      displayText: startingText
    }
  }

  updateText(text) {
    this.setState({
      inputText: text,
      displayText: text
    });
  }

  render() {
    const {inputText, displayText} = this.state;
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