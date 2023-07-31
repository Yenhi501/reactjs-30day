import React from "react";

function Video411({ count }) {
  console.log("re-render");
  return <div>Video411 {count}</div>;
}

export default React.memo(Video411);
