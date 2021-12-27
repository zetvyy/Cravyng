import axios from "axios";
import { ADD_TO_CART, GET_ALL_CART, UPDATE_CART, MAKE_NEW_ORDER, CLEAR_CART, DELETE_CART } from "../types";

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

export const getAllCart = () => {
  return async (dispatch) => {
    dispatch({ type: `${GET_ALL_CART}_LOADING` });
    try {
      const response = await axios.get(`https://cravyngteam.herokuapp.com/ordersmenu/`);

      dispatch({
        type: `${GET_ALL_CART}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: `${GET_ALL_CART}_ERROR`,
        error: error.message,
      });
    }
  };
};

export const updateCart = (id, data) => {
  return async (dispatch) => {
    try {
      await axios.put(`https://cravyngteam.herokuapp.com/ordersmenu/${id}`, data);

      dispatch({
        type: `${UPDATE_CART}_FULFILLED`,
      });
      dispatch(addToCart());
    } catch (err) {
      console.log(err);
      dispatch({
        type: `${UPDATE_CART}_ERROR`,
        error: err,
      });
    }
  };
};

export const deleteCart = (id) => {
  return async (dispatch) => {
    try {
      const rest = await axios.delete(`https://cravyngteam.herokuapp.com/ordersmenu/${id}`);
      console.log("rest", rest);
      dispatch({
        type: `${DELETE_CART}_FULFILLED`,
      });
      if (rest.data.message === "delete succes") {
        console.log("succes");
        await axios.get(`https://cravyngteam.herokuapp.com/ordersmenu/`).then((res) => dispatch({ type: `${GET_ALL_CART}_FULFILLED`, payload: res.data.data }));
        // dispatch({
        //   type: `${GET_ALL_CART}_FULFILLED`,
        //   payload: response.data.data,
        // });
      }
      // dispatch(addToCart());
    } catch (err) {
      console.log(err);
      dispatch({
        type: `${DELETE_CART}_ERROR`,
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
        type: `${MAKE_NEW_ORDER}_FULFILLED`,
        payload: response.data.data,
      });
    } catch (err) {
      dispatch({
        type: `${MAKE_NEW_ORDER}_ERROR`,
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
