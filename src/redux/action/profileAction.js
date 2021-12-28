import { GET_SALES_SUMMARY, GET_ORDER_HISTORY } from "../types";
import axios from "axios";
import moment from "moment"

const currentToken = localStorage.getItem("token");

export const getSalesSummary = (startDate = moment("1970-1-1").format('YYYY/MM/DD HH:mm:ss'), endDate = moment().format('YYYY/MM/DD HH:mm:ss')) => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL_API}/user/summary?from=${startDate}&to=${endDate}`,
        method: "GET",
        headers: {
          token: currentToken
        },
      });
      dispatch({
        type: GET_SALES_SUMMARY,
        payload: { 
          data: response.data.data,
          dataOne: response.data.dataOne,
          paidTransactions: response.data.paidTransactions,
          unPaidTransactions: response.data.unPaidTransactions,
          rating: response.data.rating
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOrderHistory = () => {
  return async dispatch => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL_API}/user/history`,
        method: "GET",
        headers: {
          token: currentToken
        }
      });
      dispatch({
        type: GET_ORDER_HISTORY,
        payload: response.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
