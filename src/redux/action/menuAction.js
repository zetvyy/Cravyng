import axios from 'axios'
import { GET_MENU } from '../types'

export const getMenu = () => {
    return (dispatch) => {
        dispatch({ type: `${GET_MENU}_LOADING`});

        axios({
            method: 'GET',
            url: 'http://localhost:3000/menus',
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
    }
}
