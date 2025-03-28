import { useEffect, useState } from "react";

const useComp = (url) => {
  const [result, setResult] = useState([]);
  const fetchData = async () => {
    const res = await fetch(url);
    setResult(await res.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return result;
};
export default useComp;
