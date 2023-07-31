import React, { useEffect, useRef, useState } from "react";

export const Video40 = () => {
  //   let TimerId;

  const [count, setCount] = useState(60);
  const TimerId = useRef();
  const prevCount = useRef();
  const h3Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h3Ref.current);
  });

  const handleStart = () => {
    TimerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    // console.log("Start -> ", TimerId.current);
  };

  const handleStop = () => {
    // myRef.current
    clearInterval(TimerId.current);
    // console.log("Stop -> ", TimerId.current);
  };
  // console.log(count, prevCount.current);

  return (
    <div>
      <h3 ref={h3Ref}> {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
