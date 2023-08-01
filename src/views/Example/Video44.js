import React from "react";
import { useReducer } from "react";
//useState
// 1. Init State : 0
// 2. Actions: Up ( state +1)/ Down ( state -1)

//useReducer
// 1. Init State : 0
// 2. Actions: Up ( state +1)/ Down ( state -1)
// 3. Reducer
// 4. Dispatch

//Init state
const initState = 0;

//Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      // init sate là số thì luôn return ra số
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function Video44(props) {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(DOWN_ACTION)}>Increment</button>
      <button onClick={() => dispatch(UP_ACTION)}>Decrement</button>
    </div>
  );
}

Video44.propTypes = {};

export default Video44;
