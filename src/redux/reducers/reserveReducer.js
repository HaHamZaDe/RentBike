const initialState = false;

const reserveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESERVE":
      return action.payload;
    default:
      return state;
  }
};

export default reserveReducer;
