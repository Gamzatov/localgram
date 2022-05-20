import React from 'react';
import Title from "../../Title";
import Likes from "../../likes";
import Comments from "../../Comments";
import { useNavigate, useParams } from "react-router-dom";
import s from './Item.module.css'
import {NavLink} from 'react-router-dom'


const Item = ({ photosItem, loading }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const filt = photosItem.filter((el) => el.id == id);
    const resu = filt.map((el) => el.url);
    return (
        <>{
            loading ?

            <div className="wrap">
                <div className={s.back_btn_wrapper}>  <button className={s.backBtn} onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
                <NavLink to='/'><button className={s.home_btn}> <ion-icon name="home-outline"></ion-icon> Home</button></NavLink>
                </div>
                <div className="card">
                    <div className="card-image">
                        {
                            photosItem.filter((el) => el.id == id).map((el) => <img className={s.chossed_photo} src={el.url} />)
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
         : Array(12)
        .fill(0)
        .map((_, index) => <h1>LOADING</h1>)}   </>

    );
};

export default Item;