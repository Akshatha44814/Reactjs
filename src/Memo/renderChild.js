import React, { useEffect } from "react";
var j = 0;
const RenderChild = () => {
  useEffect(() => {
    j++;
  });
  return <div>child render : {j}</div>;
};
export default RenderChild;

//useMemo (Hook):
//Purpose: Memoizes the result of a function, preventing re-computation
// when the dependencies haven't changed.
//How it works: It takes a function and an array of dependencies.
// The function is only re-run when one of the dependencies changes.
//When to use: When you have an expensive calculation within a component that
// you want to avoid re-computing unnecessarily, especially when the dependencies rarely change.
