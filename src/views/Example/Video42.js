import React, { useCallback, useState } from "react";
import Video421 from "./Video421";

// useCallback()
// - Reference type
// - React memo()

export const Video42 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Video421 onIncrease={handleIncrease} />
      <h1> {count} </h1>
    </div>
  );
};
