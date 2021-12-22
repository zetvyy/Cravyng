import { ADD_TO_CART, UPDATE_CHECKOUT, UPDATE_CART } from "../types";

const initialState = {
  addCart: [],
  dataCheckout: [],
  isLoading: true,
  error: null,
};

const addCartReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
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
    case `${UPDATE_CHECKOUT}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${UPDATE_CHECKOUT}_FULFILLED`:
      return {
        ...state,
        dataCheckout: payload,
        isLoading: false,
      };
    case `${UPDATE_CHECKOUT}_ERROR`:
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
        dataCart: payload,
        isLoading: false,
      };
    case `${UPDATE_CART}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};
export default addCartReducer;
