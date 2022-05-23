import React from 'react';
import { useParams } from "react-router-dom";
import s from "./Dialogs.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { createMessage, inputText } from '../../redux/actions/actions';

const Dialogs = ({ data }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [messageItem, setMessageItem] = React.useState('');
    console.log(data);
    console.log(id);
    const message = useSelector(state => {
        const { typeMessageReducer } = state;
        return typeMessageReducer.messages
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createMessage(messageItem, id));
        return setMessageItem('');
    }
    const handleInput = (e) => {
        setMessageItem(e.target.value);
        dispatch(inputText());
    }
    const sendMessage = message.map((el) => <p className={s.message}>{el.text}</p>);

    return (
        <div>

            <div className={s.dialog_flex}>
                <div className={s.incomMessage}></div>
                <div className={s.sendingMessage}>{sendMessage}</div>
            </div>

            {
                data.filter((user) => user.id == id).map((user) => (
                    <div className={s.container} key={user.id}>
                        <div className={s.user_info}>
                            <form className={s.messageForm} onSubmit={handleSubmit} action="">
                                <input onChange={handleInput} type="text" value={messageItem} placeholder='text' />
                                <div className={s.sendBtn_wrapper}>
                                    <button>Send</button>
                                </div>

                            </form>

                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Dialogs;