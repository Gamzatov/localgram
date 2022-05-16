import axios from "axios";
import { GET_USERS } from "../actionTypes";


export const setLoaded = (payload) => {
    return {
        type: 'SET_LOADED',
        payload,

    }
}


export const api =  axios.get('https://jsonplaceholder.typicode.com/users');
export const fetchUsers = (users, photos) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    api.then((res) => {
        dispatch(getUsers(res.data));
    });
};

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
};