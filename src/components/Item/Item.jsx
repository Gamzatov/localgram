import React from 'react';
import Title from "../../Title";
import Likes from "../../likes";
import Comments from "../../Comments";
import { useNavigate, useParams } from "react-router-dom";
import s from './Item.module.css'


const Item = ({ photos }) => {
    console.log(photos);
    const navigate = useNavigate();
    const { id } = useParams();
    const filt = photos.filter((el) => el.id == id);
    const resu = filt.map((el) => el.url);
    console.log('rese', resu)
    return (
        <>
            <div className="wrap">
                <div className={s.back_btn_wrapper}>  <button className={s.backBtn} onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon>Back</button></div>
                <div className="card">
                    <div className="card-image">
                        {
                            photos.filter((el) => el.id == id).map((el) => <img className={s.chossed_photo} src={el.url} />)
                        }

                        {/* {
                           filt.map((el) => <div><img className={s.chossed_photo} src={el.url} />
                           <Title data={el}/>
                           <Likes data={el}/></div> )  

                        } */}

                    </div>
                    <Comments />
                </div>
            </div>
        </>
    );
};

export default Item;