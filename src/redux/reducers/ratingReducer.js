const initialState = 0;

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RATING":
      return action.payload;
    default:
      return state;
  }
};

export default ratingReducer;
