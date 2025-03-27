import React, { useEffect } from "react";
var j = 0;
const ChildRender = () => {
  useEffect(() => {
    j++;
  });
  return <div>child render : {j}</div>;
};
export default React.memo(ChildRender);

//React.memo() (Higher-Order Component):
//Purpose: Memoizes a functional component,
// preventing unnecessary re-renders when the props passed to it haven't changed.
//How it works: It performs a shallow comparison of the props.
// If the props are the same, the component doesn't re-render.
//When to use: When you have a functional component that's expensive to render and
// you want to avoid re-rendering it unnecessarily when its props haven't changed.
