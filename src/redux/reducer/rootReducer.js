import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import authReducer from "./authReducer";
import menuDetailReducer from "./menuDetailReducer";
import addCartReducer from "./addCartReducer";

export default combineReducers({
  authReducer,
  menu: menuReducer,
  menuDetail: menuDetailReducer,
  addCartMenu: addCartReducer,
});
