import { GET_PHOTOS, SET_PHOTOS } from "../actionTypes"

const initialState = {
    photos: []
}


export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS: {
            return {
                ...state,
                photos: action.payload,
            }
        }

        default: return state
    }
}
