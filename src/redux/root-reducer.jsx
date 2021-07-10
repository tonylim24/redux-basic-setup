import { combineReducers } from "redux";
import counterReducer from "./counter/counter.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
});
