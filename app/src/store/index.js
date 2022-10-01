import { combineReducers } from "redux";
import userReducer from "./user";
import messageReducer from "./message";
import authReducer from "./auth";

const appReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  auth: authReducer,
});

export default appReducer;
