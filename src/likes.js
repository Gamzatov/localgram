
import React from 'react';
import { incrementLikes } from './redux/actions/actions'
import { usersReducer } from './redux/reducers/usersReducer';
import { useSelector, useDispatch } from 'react-redux';

const Likes = ({ data }) => {
    console.log(data);
   
    const userId = data.id;
    console.log('id', userId)


    return (
        <div className='button-controls'>
            <button onClick={() => (data.likes + 1)} className='like_btn'>{data.likes}<ion-icon name="thumbs-up-outline"></ion-icon></button>
            <button className='dislike_btn' ><ion-icon name="thumbs-down-outline"></ion-icon></button>

        </div>
    );
};

export default Likes;