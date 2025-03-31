import GrandChild from "./grandchild";

const Child = (props) => {
  return (
    <div>
      <h1>Child</h1>
      <p>{props.name}</p>
      <GrandChild {...props} />
    </div>
  );
};

export default Child;
