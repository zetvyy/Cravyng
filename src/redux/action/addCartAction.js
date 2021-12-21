import axios from "axios";
import { ADD_TO_CART } from "../types";

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
