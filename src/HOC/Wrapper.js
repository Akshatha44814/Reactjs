import React from "react";
import "./Wrapper.css";
const Wrapper = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <div className="warpper">
          <h1>Wrapped Content</h1>
          <div>
            <Component />
          </div>
          <h6> Higher-Order Component (HOC) :</h6>
          <ol>
            <li>
              A function that takes a component and returns a new component with
              enhanced functionality
            </li>
            <li>
              A way to reuse component logic by wrapping a component with a
              higher-order function
            </li>
            <li>A pattern that emerges from React's compositional nature</li>
            <li>
              A common technique in third-party React libraries, such as Redux's
              connect and Relay's createFragmentContainer
            </li>
          </ol>
        </div>
      );
    }
  };
};
export default Wrapper;
