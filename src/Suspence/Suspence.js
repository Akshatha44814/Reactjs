import { Suspense } from "react";
import CustomHook from "../CustomHook/CustomHook";



const SuspenceComp = () => {
  return (
    <div className="warpper">
      <Suspense fallback={<h1>Loading.....</h1>}>
        <CustomHook />
      </Suspense>
    </div>
  );
};

export default SuspenceComp;
