import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    INPUT_COMMENT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    SET_PHOTOS, TYPE_MESSAGE, CREATE_MESSAGE

} from '../actionTypes';


export const incrementLikes = () => {
    return {
        type: INCREMENT,
    }
};

export const decrementLikes = () => {
    return {
        type: DECREMENT
    }
};
export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        text,
    }
};


export const createComment = (text, id) => {
    return {
        type: COMMENT_CREATE,
        data: {text, id},
        text
    }
};

export const commentUpdate = (text, id) => {
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
};

export const commentDelete = (id) => {
    return {
        type: COMMENT_DELETE,
        id
    }
};
export const loaderOn = () => {
    return {
        type: LOADER_DISPLAY_ON
    }
};
export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_OFF
    }
};

export const commentsLoad = () => {
    return async dispatch => {
        dispatch(loaderOn);
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
        dispatch({
            type: COMMENTS_LOAD,
            data: jsonData
        });
        dispatch(loaderOff);
    }
};
// export const fetchPhotos = () => (dispatch) => {
//     axios.get('http://localhost:3001/photos').then((res) => {
//         dispatch(setPhotos(res.data));
//     });
// };
export const setPhotos = (photos) => {

    return {
        type: SET_PHOTOS,
        photos
    }

};

export const typeMessage = (text) =>{
  return{
      type: TYPE_MESSAGE,
      text,
  }
};
export const createMessage = (text, id) =>{
    return{
        type: CREATE_MESSAGE,
        data: {text, id},
        text
    }
};
