import axios from 'axios'
import { SET_POST, GET_POSTS } from '../actionTypes'

export const setPost = (payload) => {
    return {
        type: SET_POST,
        payload

    }
}
export const fetchPosts = (payload) => (dispatch) => {
    dispatch({
        type: SET_POST,
        payload
    })
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        dispatch(getPosts(res.data))
    })
}

export const getPosts = (payload) => {
    return {
        type: GET_POSTS,
        payload
    }
};
