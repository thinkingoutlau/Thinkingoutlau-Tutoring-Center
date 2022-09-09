import { combineReducers } from "redux";
import bookReducer from "./books";

const appReducer = combineReducers({
  books: bookReducer,
});

export default appReducer;
