import axios from "axios";
import { ADD_TO_CART, UPDATE_CHECKOUT, UPDATE_CART, CREATE_NEW_CART, CREATE_NEW_ORDER, CLEAR_CART } from "../types";

export const addToCart = (data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const formdata = new FormData();
      formdata.set("menuId", data.menuId);
      formdata.set("orderId", data.orderId);
      formdata.set("quantity", data.quantity);
      formdata.set("variantId", data.variantId);
      formdata.set("variantOptionId", data.variantOptionId);
      const response = await axios.post("https://cravyngteam.herokuapp.com/ordersmenu", formdata, {
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

export const updateCheckout = (id, data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`https://cravyngteam.herokuapp.com/order/${id}`, data, {
        headers: {
          token,
        },
      });

      dispatch({
        type: `${UPDATE_CHECKOUT}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: `${UPDATE_CHECKOUT}_ERROR`,
        error: err,
      });
    }
  };
};

export const updateCart = (id, data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`https://cravyngteam.herokuapp.com/ordersmenu/${id}`, data, {
        headers: {
          token,
        },
      });

      dispatch({
        type: `${UPDATE_CART}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (err) {
      dispatch({
        type: `${UPDATE_CART}_ERROR`,
        error: err,
      });
    }
  };
};

export const newOrder = (id, data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`https://cravyngteam.herokuapp.com/order/${id}`, data, {
        headers: {
          token,
        },
      });

      dispatch({
        type: `${CREATE_NEW_ORDER}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (err) {
      dispatch({
        type: `${CREATE_NEW_ORDER}_ERROR`,
        error: err,
      });
    }
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    dispatch({
      type: `${CLEAR_CART}`,
    });
  };
};
