import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/actions/getUsers";
import s from './Users.module.css';
import chatImg from '../../assets/images/chat.png'
import {Link, NavLink} from "react-router-dom";
import {createMessage, typeMessage} from "../../redux/actions/actions";
import * as uniqid from "uniqid";

const Users = () => {
    const [popVisible, setPopVisible] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const togglePop = (openPop) => {
        setPopVisible(openPop);
    };

    function closeSelectPopupRow() {
        setPopVisible(false);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    const usersArr = useSelector((state) => {
        const {usersReducer} = state;
        return usersReducer.users;
    });
    const handleMessage = (e) => {
        setMessage(e.target.value);
        dispatch(typeMessage(e.target.value));

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = uniqid();
        form.reset();
        return dispatch(createMessage(message, id));
    };
    const toDialog = () =>{
        setPopVisible(false);
    };
    console.log(usersArr)
    return (
        <div>
            {
                usersArr.map((u, content) => (
                    <div className={s.userInfo_holder} key={u.id}>
                        <NavLink  to={`profile/${u.id}`} >
                            <div className={s.link_grid}>
                                <div className={s.userAvatar_holder}>
                                    <img src={u.avatar ? u.avatar : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'} key={`ava` + u.index} alt={`ava`}/>
                                </div>
                                <p className={s.userName}>{u.name}</p>
                                <p className={s.visit_user}>
                                    <ion-icon name="person-outline"></ion-icon>
                                </p>
                            </div>

                        </NavLink>
                        <div onClick={() => setPopVisible(u)} className={s.msg_btn}>
                            {/*<img src={chatImg} alt=""/>*/}
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                    </div>


                ))

            }

            {popVisible &&
            <div id="popup">
                <div className={s.popup_inner}>
                    <div className="messageTo">
                        <div className={s.user_info}>
                            <div className="userAvatar">
                                <img src={popVisible.avatar} alt="ava" className={s.msg_avatar}/>
                            </div>
                            <div className={s.user_name}>
                                <p>Write to {popVisible.name}</p>
                            </div>
                            <div className={s.close_popup}>
                                <span onClick={() => closeSelectPopupRow(null)}><ion-icon
                                    name="close-outline"></ion-icon></span>
                            </div>
                        </div>
                        <hr className={s.hor_line}/>
                        <form onSubmit={handleSubmit}>
                            <div className="text_input_holder">
                                <div className={s.textarea_wrapper}><textarea onChange={handleMessage}
                                                                              name="messasge"
                                                                              id=""
                                                                              placeholder='Type your message'></textarea>
                                </div>
                                <div className={s.btn_wrapper}>
                                   <NavLink to={`dialog/${popVisible.id}`} key={popVisible.id}><button onClick={toDialog} className={s.secondaryBtn}>To dialog with {popVisible.name}</button></NavLink>
                                    <button type='submit'  className={s.send_pop_msg}>Send</button>

                                </div>
                                <p>{message}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }


        </div>
    );
};

export default Users;