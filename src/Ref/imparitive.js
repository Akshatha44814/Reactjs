import React, { useDebugValue, useImperativeHandle, useState } from "react";

const Imparitive = ({}, ref) => {
  useImperativeHandle(ref, () => ({increment}));
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((c) => c + 1);
  };
  useDebugValue((counter) , ()=>{console.log(counter)})
  return (
    <div>
      <button onClick={() => increment()}>same child button</button>
      <br></br>
      {counter}
    </div>
  );
};
const comp = React.forwardRef(Imparitive)
export default comp
