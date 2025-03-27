import { createContext } from "react";
import Page from "./Page";

export const DataContext = createContext();
const Context = () => {
  return (
    <div>
      <p>
        1. useContext:
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </p>
        <div>
          React Context is a way to manage state globally.
          <p>
            It can be usedtogether with the useState Hook to share state between
            deeply nested components more easily than with useState alone.
          </p>
        </div>
      </p>
      <DataContext.Provider value="red">
        <Page />
      </DataContext.Provider>
    </div>
  );
};

export default Context;
