import { combineReducers } from "redux";
import ratingReducer from "./ratingReducer";

const rootReducer = combineReducers({
  rating: ratingReducer,
});

export default rootReducer;
