const intialState = {
  count: 0,
  output:[]
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    return { ...newState, count: newState.count + 1 };
  }
  if (action.type === "DISPLAY") {
    console.log(action)
    return { ...newState, output: action.payload};
  }
  return newState;
};
export default reducer;
