import React from 'react';
import s from './Sidebar.module.css'
import Users from "../Users/Users";

const Sidebar = () => {
    return (
        <div className={s.sidebar_wrapper}>
            <div className={s.mob_button_wrapper}>
                <button className={s.mob_btn}>MENU</button>
            </div>
            <div className={s.sidebar}>
                <Users />
            </div>
        </div>
    );
};

export default Sidebar;