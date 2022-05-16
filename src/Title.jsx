import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions/actions"

const Title = ({ data }) => {
    console.log(data)
    // const text = useSelector(state =>{
    //     const {inputReducer} = state;
    //     return inputReducer.text
    // });
    // const dispatch = useDispatch();
    // const handleChange = (e) =>{
    //     console.log('handleChange', e.target.value);
    //     dispatch(inputText(e.target.value));
    // };
    return (
        <div className='card-title'>
            <div className="photo_info">
                <p className="photo_description">{data.description}</p>
                <p className="photo_date">{data.date}</p>
            </div>

        </div>
    );
};

export default Title;