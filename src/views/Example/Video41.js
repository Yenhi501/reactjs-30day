import React, { useState } from "react";
import Video411 from "./Video411";

export const Video41 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <p>{<Video411 count={count} />}</p>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>Click me2!</button>
    </div>
  );
};
