import { useMemo, useState } from "react";
import ChildRender from "./ChildRender";
import RenderChild from "./renderChild";

const MemoComp = () => {
  const [count, setCount] = useState(0);

  const memoised = useMemo(() => {
    return <RenderChild />;
  }, []);
  
  return (
    <div>
      <button
        onClick={() => {
          setCount((val) => val + 1);
        }}
      >
        +
      </button>
      <p>count value : {count}</p>
      <h6>React.memo</h6>
      <ChildRender />
      <h6>UseMemo</h6>
      {memoised}
    </div>
  );
};
export default MemoComp;
