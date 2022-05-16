import {CREATE_MESSAGE, TYPE_MESSAGE} from "../actionTypes";

const initialState = {
    text: '',
    messages: []
};


export const typeMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_MESSAGE: {
            return {
                ...state,
                text: action.text,
            }
        }
        case CREATE_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.data]
            }
        }
        default:
            return state;

    }
};