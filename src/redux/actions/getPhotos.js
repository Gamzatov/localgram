import axios from "axios";
import { GET_PHOTOS } from "../actionTypes";



export const fetchPhotos = (photos) => (dispatch) => {
    dispatch({
        type: 'GET_PHOTOS',
        payload: false
    });
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((res) => {
        dispatch(getPhotos(res.data))
        console.log('photos res', res.data)
    })
}
export const getPhotos = (payload) => {
    return {
        type: 'GET_PHOTOS',
        payload
    }
};