import React, {useEffect, useState} from 'react';
import {createComment, commentsLoad,inputText} from "./redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import * as uniqid from "uniqid";
import SingleComment from "./SingleComment";

const Comments = (props) => {
    const [commentText, setCommentText] = useState('');
    const text = useSelector(state => {
        const {commentReducer} = state;
        return commentReducer.comments
    });

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(createComment(commentText, id))
    };

    const handleInput = (e) => {
        setCommentText(e.target.value);
        dispatch(inputText(e.target.value));
    };
    useEffect(() => {
        dispatch(commentsLoad())
    }, []);
    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input onChange={handleInput} placeholder='leave your comment' type="text"/>
                {!commentText ? <input type="submit" value='Type your comment' disabled /> : <input type="submit" value='Send'  />}
                
            </form>
            {
                text.map((res) => <SingleComment key={res.id} data={res}/>)
            }

        </div>
    );
};

export default Comments;