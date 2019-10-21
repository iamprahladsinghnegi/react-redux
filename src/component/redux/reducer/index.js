const isState = {
  name: "hey no one here",
  details: "i don't know"
};

const reducer = (state = isState, action) => {
  //   console.log(action);
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload
    };
  }
  return state;
};

export default reducer;
