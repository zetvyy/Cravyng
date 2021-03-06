import { 
  GET_MENU, 
  GET_MENU_CAT_RECOMMENDED, 
  GET_MENU_CAT_MOST_FAVORITE, 
  GET_MENU_CAT_APPETIZER, 
  GET_MENU_CAT_HOT_DISHES, 
  GET_MENU_CAT_SEAFOOD, 
  GET_MENU_CAT_VEGETABLE, 
  GET_MENU_CAT_STAPLE,
  GET_MENU_CAT_FRIED,
  GET_MENU_CAT_DESSERTS,
  GET_MENU_CAT_SOUP,
  GET_MENU_CAT_BEVERAGES } from "../types";

const initialState = {
  data: [],
  dataRecommended: [],
  dataMostFavorite: [],
  dataAppetizer: [],
  dataHotDishes: [],
  dataSeafood: [],
  dataVegetable: [],
  dataStaple: [],
  dataFried: [],
  dataDesserts: [],
  dataSoup: [],
  dataBeverages: [],
  isLoading: true,
  error: null,
};

const menuReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_MENU}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_MENU}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_RECOMMENDED}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_RECOMMENDED}_FULFILLED`:
      return {
        ...state,
        dataRecommended: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_RECOMMENDED}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_MOST_FAVORITE}_LOADING`:
      return {
        ...state,
      };

    case `${GET_MENU_CAT_MOST_FAVORITE}_FULFILLED`:
      return {
        ...state,
        dataMostFavorite: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_MOST_FAVORITE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_APPETIZER}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_APPETIZER}_FULFILLED`:
      return {
        ...state,
        dataAppetizer: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_APPETIZER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_HOT_DISHES}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_HOT_DISHES}_FULFILLED`:
      return {
        ...state,
        dataHotDishes: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_HOT_DISHES}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_SEAFOOD}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_SEAFOOD}_FULFILLED`:
      return {
        ...state,
        dataSeafood: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_SEAFOOD}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_VEGETABLE}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_VEGETABLE}_FULFILLED`:
      return {
        ...state,
        dataVegetable: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_VEGETABLE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_STAPLE}_LOADING`:
      return {
        ...state,
      };
    case `${GET_MENU_CAT_STAPLE}_FULFILLED`:
      return {
        ...state,
        dataStaple: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_STAPLE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    case `${GET_MENU_CAT_FRIED}_FULFILLED`:
      return {
        ...state,
        dataFried: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_DESSERTS}_FULFILLED`:
      return {
        ...state,
        dataDesserts: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_SOUP}_FULFILLED`:
      return {
        ...state,
        dataSoup: payload,
        isLoading: false,
      };
    case `${GET_MENU_CAT_BEVERAGES}_FULFILLED`:
      return {
        ...state,
        dataBeverages: payload,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
export default menuReducer;
