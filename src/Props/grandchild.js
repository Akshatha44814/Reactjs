const GrandChild = (props) => {
  return (
    <div>
      <h1>GrandChild</h1>
      <span>props drilling</span>
      <p>{props.name}</p>
    </div>
  );
};

export default GrandChild;
