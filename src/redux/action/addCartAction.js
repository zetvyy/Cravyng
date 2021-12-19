import axios from "axios";
import { ADD_TO_CART } from "../types";

export const addCart = data => {
    return async dispatch => {
      try {
        const token = localStorage.getItem("token" );  
        const response = await axios.post('https://cravyngteam.herokuapp.com/ordersmenu', data, {headers:{
            token
        }});
        console.log(response);
        
        dispatch({
          type: `${ADD_TO_CART}_FULFILLED`,
          payload: response.data.data
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: `${ADD_TO_CART}_ERROR`,
          error: err
        });
      }
    };
  };