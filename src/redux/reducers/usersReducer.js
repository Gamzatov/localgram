import { GET_USERS, SET_LOADED, INCREMENT, DECREMENT } from "../actionTypes";

const initialState = {
    users: [],
    text: '',
    isLoaded: false
};


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload,
                isLoaded: true
            }
        }
        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        } case INCREMENT: {
            return {
                ...state,
                likes: action.payload + 1,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                likes: action.payload - 1,
            }
        }

        default:
            return state
    }
};