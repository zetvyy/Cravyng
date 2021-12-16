import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import menuDetailReducer from "./menuDetailReducer";

export default combineReducers({
  menu: menuReducer,
  menuDetail: menuDetailReducer,
  authReducer,
});
