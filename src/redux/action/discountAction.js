import axios from 'axios';
import { GET_DISCOUNT, PUT_DISCOUNT } from '../types';

export const getDiscount = () => {
    return async (dispatch) => {
        dispatch({ type: `${GET_DISCOUNT}_LOADING`});
        try {
            const response = await axios.get("https://cravyngteam.herokuapp.com/discount/");
            dispatch({
                type: `${GET_DISCOUNT}_FULFILLED`,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: `${GET_DISCOUNT}_ERROR`,
                error: error.message,
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