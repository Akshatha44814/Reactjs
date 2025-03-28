import { useEffect, useRef } from "react";
import ChildComp from "./Childcomp";
import Imparitive from "./imparitive";

const Refcomp = () => {
  const inputref = useRef();
  const childInput = useRef();
  const childref = useRef();

  useEffect(() => {
    inputref.current.focus();
  }, []);
  const focusElement = () => {
    childInput.current.focus();
  };

  return (
    <div>
      <div>
        <h1>parent page</h1>
        <input type="text" name="first" />
        <input type="text" name="second" ref={inputref} />
        <input type="text" name="third" />
        <button onClick={focusElement}>Focus Child Element</button>
      </div>
      <div>
        <h1>child page</h1>
      </div>
      <ChildComp ref={childInput} />
      <h1>Imparitive handler</h1>
      <Imparitive ref={childref} />
      <button onClick={() => childref.current?.increment()}>
        Parent button
      </button>
    </div>
  );
};

export default Refcomp;
