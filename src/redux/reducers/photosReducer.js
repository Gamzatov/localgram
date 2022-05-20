import { GET_PHOTOS, SET_PHOTOS, SET_CURRENT_PAGE } from "../actionTypes"

const initialState = {
    photos: [],
    currentPage: 1,
    totalCount: '',
    perPage: 8,
    isFetching: true

}
export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS: {
            return {
                ...state,
                photos: action.payload,
                totalCount: action.payload,
                isFetching: false
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }

        } case SET_PHOTOS: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }

        default: return state
    }
}


export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })