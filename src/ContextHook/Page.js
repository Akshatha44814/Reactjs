import { useContext, useState } from "react";
import { DataContext } from "./Context";

const Page = () => {
  const newData = useContext(DataContext);
  const [colors, setColors] = useState(newData);
  console.log(newData);
  return (
    <div>
      <p style={{ color: `${colors}` }}>Change My Color</p>
      <button
        onClick={() => {
          setColors((val) => (val === "red" ? "blue" : "red"));
        }}
      >
        click
      </button>
    </div>
  );
};
export default Page;
