import axios from 'axios'
import { 
    GET_MENU, 
    GET_MENU_CAT, 
    GET_MENU_CAT_RECOMMENDED, 
    GET_MENU_CAT_MOST_FAVORITE,
    GET_MENU_CAT_APPETIZER,
    GET_MENU_CAT_HOT_DISHES,
    GET_MENU_CAT_SEAFOOD,
    GET_MENU_CAT_VEGETABLE,
    GET_MENU_CAT_STAPLE } from '../types';

export const getMenu = () => {
    return async (dispatch) => {
        dispatch({ type: `${GET_MENU}_LOADING` });
        try {
            const response = await axios('https://cravyngteam.herokuapp.com/menu/home/');
            dispatch({
                type: `${GET_MENU}_FULFILLED`,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: `${GET_MENU}_ERROR`,
                error: error.message,
            })
        }

    }
}

export const getMenuCategories = (id) => {
    return async (dispatch) => {
        dispatch({ type: `${GET_MENU_CAT}_LOADING` });
        try {
            const response = await axios('https://cravyngteam.herokuapp.com/menu/category/' + id);
            
            // dispatch({
            //     type: `${GET_MENU_CAT}_FULFILLED`,
            //     payload: response.data.data,
            // });
            if(id === 1) {
                dispatch({
                type: `${GET_MENU_CAT_RECOMMENDED}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 2) {
                dispatch({
                type: `${GET_MENU_CAT_MOST_FAVORITE}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 3) {
                dispatch({
                type: `${GET_MENU_CAT_APPETIZER}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 4) {
                dispatch({
                type: `${GET_MENU_CAT_HOT_DISHES}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 5) {
                dispatch({
                type: `${GET_MENU_CAT_SEAFOOD}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 6) {
                dispatch({
                type: `${GET_MENU_CAT_VEGETABLE}_FULFILLED`,
                payload: response.data.data,
            });
            } else if (id === 7) {
                dispatch({
                type: `${GET_MENU_CAT_STAPLE}_FULFILLED`,
                payload: response.data.data,
            });
            }
                
        } catch (error) {
            dispatch({
                type: `${GET_MENU_CAT}_ERROR`,
                error: error.message,
            })
        }

    }
}

