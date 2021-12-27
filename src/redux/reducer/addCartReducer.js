import { ADD_TO_CART, UPDATE_CART, GET_ALL_CART, DELETE_CART, CLEAR_CART } from "../types";

const initialState = {
  dataAllCart: [],
  addCart: [],
  isLoading: true,
  error: null,
};

const addCartReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_ALL_CART}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_ALL_CART}_FULFILLED`:
      return {
        ...state,
        dataAllCart: payload,
        isLoading: false,
      };
    case `${GET_ALL_CART}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${ADD_TO_CART}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${ADD_TO_CART}_FULFILLED`:
      return {
        ...state,
        addCart: [...state.addCart, payload],
        isLoading: false,
      };
    case `${ADD_TO_CART}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${UPDATE_CART}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${UPDATE_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${UPDATE_CART}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${DELETE_CART}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${DELETE_CART}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${DELETE_CART}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${CLEAR_CART}`:
      return {
        ...state,
        addCart: [],
      };

    default:
      return {
        ...state,
      };
  }
};
export default addCartReducer;
