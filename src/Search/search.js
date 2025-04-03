import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchItem = () => {
  const resOutPut = useSelector((state) => state.output);
  const [lists, setSearchItem] = useState(resOutPut)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    let listsdata = resOutPut.filter((item, index) => {
      if (item.title.includes(e.target.value)) {
        return true;
      }
    });
    setSearchItem([...listsdata])
  };
  const debounceMethod = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);
  useEffect(()=>{
    return()=>{
        debounceMethod.cancel();
    }
  })
  return (
    <div className="warpper">
      <h1>Serach Item</h1>
      <input type="text" onChange={debounceMethod} />
      <div>
        {lists?.map((item, index) => {
          return (
            <div key={index}>
              {item.id} . {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchItem;
