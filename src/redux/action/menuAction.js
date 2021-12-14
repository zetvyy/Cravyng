import axios from "axios";
import { GET_MENU, GET_DETAIL_MENU } from "../types";

export const getMenu = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_MENU}_LOADING` });

    axios({
      method: "GET",
      url: "http://localhost:3001/menus",
    })
      .then((response) => {
        dispatch({
          type: `${GET_MENU}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_MENU}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const getDetailMenu = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_DETAIL_MENU}_LOADING` });

    axios({
      method: "GET",
      url: "https://cravyngteam.herokuapp.com/menu/10",
    })
      .then((response) => {
        dispatch({
          type: `${GET_DETAIL_MENU}_FULFILLED`,
          payload: console.log(response),
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_DETAIL_MENU}_ERROR`,
          error: error.message,
        });
      });
  };
};
