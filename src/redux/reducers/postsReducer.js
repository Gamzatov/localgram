import { CREATE_POST, GET_POSTS, SET_POST, POST_CREATE, SET_CURRENT_PAGE } from '../actionTypes'
const initialState = {
    posts: [],
    currentPage: 1,
    totalCount: '',
    perPage: 8,
    isFetching: true
}


export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: action.payload,

            }
        }
        case SET_POST: {
            return {
                ...state,
                isLoaded: action.payload
            }
        } case POST_CREATE: {
            return {
                ...state,
                posts: [...state.posts, action.data,],
                text: action.text
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }

        }
        default: return state
    }
}