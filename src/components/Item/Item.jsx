import React from 'react';
import Comments from "../../Comments";
import { useNavigate, useParams } from "react-router-dom";
import s from './Item.module.css'
import { NavLink } from 'react-router-dom'


const Item = ({ photosItem, loading }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <>


            <div className="wrap">
                <div className={s.back_btn_wrapper}>  <button className={s.backBtn} onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
                    <NavLink to='/'><button className={s.home_btn}> <ion-icon name="home-outline"></ion-icon> Home</button></NavLink>
                </div>
                <div className="card">
                    <div className="card-image">
                        {
                            photosItem.filter((el) => el.id == id).map((el, index) => <img className={s.chossed_photo} src={el.url} key={index} />)
                        }
                    </div>
                    <Comments />
                </div>
            </div>
        </>

    );
};

export default Item;