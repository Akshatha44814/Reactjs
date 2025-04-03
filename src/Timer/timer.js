import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);

  const refData = useRef();

  const startTimer = (e) => {
    refData.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    setPause((p) => !p);
  };

  const stopTimer = (e) => {
    if(!pause){
      clearInterval(refData.current)
    }
    setPause((p) => !p);
  };

  return (
    <div className="warpper">
      <h1>Timer</h1>
      <div>{count}</div>
      {pause ? (
        <button onClick={(e) => startTimer(e)}>Start</button>
      ) : (
        <div>
          <button onClick={(e) => stopTimer(e)}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default Timer;
