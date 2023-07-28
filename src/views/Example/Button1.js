import React from 'react';

// Stateless component
function Button2(props) {
  return (
    <button>{props.children}</button>
  );
}

// Parent component
function Button1() {
  return (
    <div>
      <Button2>Click Me</Button2>   {/* props.children */}
      <Button2 name="Submit">Submit</Button2>  {/* props.name */}
    </div>
  );
}

export default Button1;
