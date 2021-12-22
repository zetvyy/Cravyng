import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import menuDetailReducer from "./menuDetailReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  menu: menuReducer,
  menuDetail: menuDetailReducer,
  authReducer,
  profile: profileReducer
});
