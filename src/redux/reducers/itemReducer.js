import {SET_PHOTOS} from "../actionTypes";

const initialState = {
    photos: [],
    isLoaded: false
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS: {
            return {
                ...state,
                photos: action.photos,
                isLoaded: true
            }

        }
        default:
            return state;
    }
};