import { useDispatch, useSelector } from "react-redux";

const ReduxComp = () => {
  const count = useSelector((state) => state.count);
  const resOutPut = useSelector((state) => state.output);
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
      <div>
        State Management: Redux helps manage the state of your application in a
        predictable way, which is crucial for large and complex applications
        where data is shared across multiple components. 
        <br/>
        Single Source of Truth:
        Redux maintains a single, centralized store for the entire application's
        state, making it easier to understand and debug the application's
        behavior. 
        <br/>
        Actions and Reducers: Redux uses actions (plain JavaScript
        objects that describe what happened) and reducers (pure functions that
        determine how the state changes based on an action) to update the state.
        One-Way Data Flow: 
        <br/>
        Redux follows a one-way data flow pattern, where the
        UI triggers actions, which in turn dispatch to the store, which updates
        the state, and the UI re-renders based on the new state.
      </div>

      <h1>Saga Call</h1>

      <button onClick={()=>{dispatch({type:"FETCH"})}}>Fetch Api Data</button>
      {resOutPut.map((item,index)=>{
        return (<div key={index}>{item.title}</div>)
      })}
    </div>
  );
};
export default ReduxComp;
