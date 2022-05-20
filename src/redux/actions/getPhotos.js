import axios from "axios";
import { GET_PHOTOS, SET_PHOTOS } from "../actionTypes";

export const setPhotos = (payload) => {
    return {
        type: SET_PHOTOS,
        payload
    }
}

export const fetchPhotos = (currentPage, perPage, payload) => (dispatch) => {
    dispatch({
        type: SET_PHOTOS,
        payload
    });
    axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`).then((res) => {
        dispatch(getPhotos(res.data))
    })
}
export const getPhotos = (payload) => {
    return {
        type: GET_PHOTOS,
        payload
    }
};