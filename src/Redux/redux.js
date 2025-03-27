import { useDispatch, useSelector } from "react-redux";

const ReduxComp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
     <h1>The value from the redux store</h1> 
     
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        ADD
      </button>
      <div> {count} </div>
    </div>
  );
};
export default ReduxComp;
