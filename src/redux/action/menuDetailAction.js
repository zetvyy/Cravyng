import axios from "axios";
import { GET_MENU_DETAIL } from "../types";


export const getMenuDetail = (id) => {
    
    return async (dispatch) => {
        dispatch({ type: `${GET_MENU_DETAIL}_LOADING` });
        try {
            const response = await axios.get(`https://cravyngteam.herokuapp.com/menu/${id}`);
            
            dispatch({
                type: `${GET_MENU_DETAIL}_FULFILLED`,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: `${GET_MENU_DETAIL}_ERROR`,
                error: error.message,
            })
        }

    }
}



