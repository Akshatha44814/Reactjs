import { useCallback, useState } from "react";
import Todo from "./Todo";

const Callbacks = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(["wakeup", "get ready"]);
  const inc = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new Todo"]);
  }, []);
  return (
    <div>
      <div>
        <h1>Parent component</h1>
        <button onClick={inc}>+</button>
        <div>{count}</div>
      </div>
      <h1>Child component</h1>
      <Todo todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default Callbacks;
