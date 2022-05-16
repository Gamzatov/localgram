import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {commentDelete, commentUpdate} from "./redux/actions/actions";

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState('');
    const {id, text} = data;
    const handleInput = (e) => {
        return setCommentText(e.target.value);
    };
    const handleDelete = (e) =>{
      e.preventDefault();
      dispatch(commentDelete(id));
    };
    const dispatch = useDispatch();
    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    },[text]);
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit update Text ->', commentText);
        dispatch(commentUpdate(commentText, id));
    };

    return (
        <form onSubmit={handleUpdate} action="" className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">
                &times;
            </div>

            <input onChange={handleInput} value={commentText} type="text"/>
            <input type="hidden"/>

        </form>

    );
};

export default SingleComment;