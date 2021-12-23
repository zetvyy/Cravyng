import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import menuDetailReducer from "./menuDetailReducer";
import addCartReducer from "./addCartReducer";
import getOrderReducer from "./getOrderReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  authReducer,
  menu: menuReducer,
  menuDetail: menuDetailReducer,
  addCartMenu: addCartReducer,
  getOrderMenu: getOrderReducer,
  profile: profileReducer,
});
