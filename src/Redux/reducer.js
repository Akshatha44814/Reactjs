const intialState = {
  count: 0,
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    return { ...newState, count: newState.count + 1 };
  }
  return newState;
};
export default reducer;
