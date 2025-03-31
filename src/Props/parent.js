import { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [name, setName] = useState("akshatha");
  return (
    <div>
      <h1>Parent</h1>
      <Child name={name} />
    </div>
  );
};

export default Parent;
