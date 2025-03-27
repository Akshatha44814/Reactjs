import Wrapper from "./Wrapper";

const One = () => {
  return (
    <div>
      <p>I am the Content of One</p>
    </div>
  );
};
const EnhancedOne = Wrapper(One);
export default EnhancedOne;
