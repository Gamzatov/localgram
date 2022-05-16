import React from 'react';
import { useSelector } from 'react-redux';
import s from "../Users/Users.module.css";

const PopUp = () => {
    const message = useSelector((state) => {
        console.log('masdas', state);
        const {typeMessageReducer} = state;
        return typeMessageReducer.text;
    })
    console.log('text', message)
    const [popVisible, setPopVisible] = React.useState(false);
    const togglePop = (openPop) => {
        setPopVisible(openPop);
    };

    function closeSelectPopupRow() {
        setPopVisible(false);
    }
    return (
        <div id="popup">
            <div className={s.popup_inner}>
                <div className="messageTo">
                    <div className={s.user_info}>
                        <div className="userAvatar">
                            <img src={popVisible.avatar} alt="ava" className={s.msg_avatar} />
                        </div>
                        <div className={s.user_name}>
                            <p>Write to {popVisible.name}</p>
                        </div>
                        <div className={s.close_popup}>
                            <span onClick={() => closeSelectPopupRow(null)}><ion-icon
                                name="close-outline"></ion-icon></span>
                        </div>
                    </div>
                    <hr className={s.hor_line} />
                    <div className="text_input_holder">
                        <div className={s.textarea_wrapper}><textarea name="messasge" id="" placeholder='Type your message' ></textarea></div>
                        <div className={s.btn_wrapper}>
                            <button className={s.send_pop_msg}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;