import React from "react";
import { memo } from "react";

function Video421({ onIncrease }) {
  return (
    <div>
      <h2>XUẤT SẮC</h2>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  );
}

export default memo(Video421);
