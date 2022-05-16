import {combineReducers} from 'redux';
import {inputReducer} from "./reducers/inputReducer";
import {commentReducer} from "./reducers/commentReducer";
import {itemReducer} from "./reducers/itemReducer";
import {usersReducer} from "./reducers/usersReducer";
import {typeMessageReducer} from "./reducers/typeMessageReducer";
import {photosReducer} from "./reducers/photosReducer"

export const rootReducer = combineReducers({
    inputReducer,
    commentReducer,
    itemReducer,
    usersReducer,
    typeMessageReducer,
    photosReducer
});