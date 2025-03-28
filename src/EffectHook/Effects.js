import axios from "axios";
import { useEffect, useLayoutEffect, useRef } from "react";

const Effects = () => {
  const API = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    //example for componentDidMount
  }, []);

  useEffect(() => {
    //example for componentDidUpdate
  }, ["dep"]);
  useEffect(() => {
    //example for componentWillUnMount
    return () => {};
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(API, {
      signal: signal,
    })
      .then((response) => response.json())
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          // handle error
        }
      });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(API, {
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("successfully aborted");
        } else {
          // handle error
        }
      });
    return () => {
      // cancel the request before component unmounts
      source.cancel();
    };
  }, []);
  const ref = useRef(null);

  useLayoutEffect(() => {
    // Get the width of the element after it's rendered
    const width = ref.current.offsetWidth;
    console.log(`Element width: ${width}`);
  }, []);
  return (
    <div>
      <div>
        The useEffect hook in React functional components effectively replaces
        the functionality of the class component lifecycle methods
        componentDidMount, componentDidUpdate, and componentWillUnmount.
      </div>
      <div>
        <h2>componentDidMount equivalent:</h2>
        useEffect with an empty dependency array ([]) runs only after the
        initial render, similar to componentDidMount.
      </div>
      <div>
        <h2>componentDidUpdate equivalent: </h2>
        useEffect with a non-empty dependency array runs after every render and
        whenever the values in the dependency array change, similar to
        componentDidUpdate.
      </div>
      <div>
        <h2>componentWillUnmount equivalent:</h2>A cleanup function returned
        from useEffect runs before the component unmounts, similar to
        componentWillUnmount.
      </div>
      <h1>useLayoutEffect</h1>
      in React is used for side effects that need to happen before the browser
      paints the screen, ensuring DOM measurements are accurate and animations
      are smooth. Here's a simple example:
      <div
        ref={ref}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightgray",
        }}
      >
        This is a box
      </div>
      Synchronous Execution: This hook runs after the component's DOM is updated
      but before the browser paints the screen. useLayoutEffect runs
      synchronously, meaning the browser won't paint the screen until the effect
      completes. DOM Manipulation: It's useful for DOM measurements, animations,
      and other tasks that need to be done before the browser paints. Avoid
      Flicker: By ensuring DOM updates happen before painting, useLayoutEffect
      can help avoid flickering or unexpected visual changes.
    </div>
  );
};

export default Effects;
