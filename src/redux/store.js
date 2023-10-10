import { legacy_createStore, combineReducers } from "redux";
import ratingReducer from "./reducers/ratingReducer";

const rootReducer = combineReducers({
  rating: ratingReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
