import { useEffect, useRef } from "react";
import ChildComp from "./Childcomp";

const Refcomp = () => {
  const inputref = useRef();
  const childInput = useRef();

  useEffect(() => {
    inputref.current.focus();
  }, []);
  const focusElement = () => {
    childInput.current.focus();
  };
  return (
    <div>
      <div>
        {" "}
        <h1>parent page</h1>
        <input type="text" name="first" />
        <input type="text" name="second" ref={inputref} />
        <input type="text" name="third" />
        <button onClick={focusElement}>Focus Child Element</button>
      </div>
      <div>
        {" "}
        <h1>child page</h1>
      </div>
      <ChildComp ref={childInput} />
    </div>
  );
};

export default Refcomp;
