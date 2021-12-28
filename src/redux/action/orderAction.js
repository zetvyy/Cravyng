import axios from "axios";
import { GET_ORDER, CREATE_NEW_ORDER, UPDATE_CHECKOUT, POST_PAYMENT, PUT_DISCOUNT } from "../types";

export const getOrder = () => {
    return async (dispatch) => {
      dispatch({ type: `${GET_ORDER}_LOADING` });
      try {
        const response = await axios.get("https://cravyngteam.herokuapp.com/order");
        dispatch({
          type: `${GET_ORDER}_FULFILLED`,
          payload: response.data.data,
        });
      } catch (error) {
        dispatch({
          type: `${GET_ORDER}_ERROR`,
          error: error.message,
        });
      }
    };
  };

const currentToken = localStorage.getItem("token" );

export const createNewOrder = () => {
  return async (dispatch) => {
    dispatch({type: `${CREATE_NEW_ORDER}_LOADING`});
    try {
      const response = await axios({
        url: "https://cravyngteam.herokuapp.com/order",
        
        method: "POST",
        headers: {
          token: currentToken,
        }
      });
      dispatch({
        type: `${CREATE_NEW_ORDER}_FULFILLED`,
        payload: response.data.data
      });

    } catch (error) {
      dispatch({
        type: `${CREATE_NEW_ORDER}_ERROR`,
        error: error.message,
      })
    }
  }
}


export const updateCheckout = (id, data) => {
  return async (dispatch) => {
    try {
      
      const response = await axios.put(`https://cravyngteam.herokuapp.com/order/${id}`, 
      data, {headers:{
            token: currentToken,
      }});
      dispatch({
        type: `${UPDATE_CHECKOUT}_FULFILLED`,
        payload: response.data.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: `${UPDATE_CHECKOUT}_ERROR`,
        error: err
      })
    }
  }
}

export const updateDiscount = (id, data) => {
  return async (dispatch) => {
      try {
        const token = localStorage.getItem("token" );
        const formdata = new FormData();
        formdata.append("voucherCode", data)
        const response = await axios.put(`https://cravyngteam.herokuapp.com/order/${id}`, 
        formdata, {headers:{
              token,
        }});
        
        dispatch({
          type: `${PUT_DISCOUNT}_FULFILLED`,
          payload: response.data.data,
        });
        
  
      } catch (err) {
        console.log(err);
        dispatch({
          type: `${PUT_DISCOUNT}_ERROR`,
          error: err
        })
      }
    }
}


export const payment = (id) => {
  return async (dispatch) => {
    try {
      
      const response = await axios.post(`https://cravyngteam.herokuapp.com/user/payment2/${id}`,
      {headers: {
        'Content-Type': 'application/json',
        }});

      dispatch({
        type: `${POST_PAYMENT}_FULFILLED`,
        payload: response.data.data 
      })

    } catch (err) {
      console.log(err, "err");
      dispatch({
        type: `${POST_PAYMENT}_ERROR`,
        error: err
      })
    }
  }
} 