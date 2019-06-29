import React from 'react';
import ReactDOM from 'react-dom';

const Component = () => {
  const buttonText = {
    text: 'Click me!!!'
  };

  const buttonStyle = {
      backgroundColor: 'blue',
      color: 'white' 
    }

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={buttonStyle}>{buttonText.text}</button>
    </div>
  )
};

ReactDOM.render(<Component/>, document.querySelector("#root"));
