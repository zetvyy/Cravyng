import axios from "axios";
import { GET_MENU_DETAIL, LOGIN_FAIL, LOGIN_SUCCESS, ADD_TO_CART } from "../types";

export const getMenuDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: `${GET_MENU_DETAIL}_LOADING` });
    try {
      const response = await axios.get(`https://cravyngteam.herokuapp.com/menu/${id}`);

      dispatch({
        type: `${GET_MENU_DETAIL}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: `${GET_MENU_DETAIL}_ERROR`,
        error: error.message,
      });
    }
  };
};

export const addCart = (data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const formdata = new FormData();
      formdata.set("menuId", data.menuId);
      formdata.set("orderId", data.orderId);
      formdata.set("quantity", data.quantity);
      formdata.set("variantId", data.variantId);
      formdata.set("variantOptionId", data.variantOptionId);
      const response = await axios.post(`https://cravyngteam.herokuapp.com/ordersmenu`, formdata, {
        headers: {
          token,
        },
      });
      console.log(response);

      dispatch({
        type: `${ADD_TO_CART}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: `${ADD_TO_CART}_ERROR`,
        error: err,
      });
    }
  };
};
