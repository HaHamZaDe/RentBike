import { legacy_createStore, combineReducers } from "redux";
import ratingReducer from "./reducers/ratingReducer";
import reserveReducer from "./reducers/reserveReducer";

const rootReducer = combineReducers({
  rating: ratingReducer,
  isReserved: reserveReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
