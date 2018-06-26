import React from 'react';

function MyStyledComponent() {
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div style={myStyledComponentStyles}>
      <h1>Hey, I'm a component</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
      <p className="red-text">only this paragraph will get the style</p>
      <style jsx>{`
        .red-text {
          color:red;
        }
      `}</style>
    </div>
  );
}

export default MyStyledComponent;
