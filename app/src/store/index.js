import { combineReducers } from "redux";
import userReducer from "./user";
import messageReducer from "./message";

const appReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

export default appReducer;
