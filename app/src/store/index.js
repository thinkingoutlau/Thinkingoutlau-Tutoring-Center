import { combineReducers } from "redux";
import userReducer from "./user";
import messageReducer from "./message";
import authReducer from "./auth";
import imageReducer from "./image";

const appReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  auth: authReducer,
  image: imageReducer
});

export default appReducer;
