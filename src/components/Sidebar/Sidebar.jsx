import React from 'react';
import s from './Sidebar.module.css'
import Users from "../Users/Users";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Users />
        </div>
    );
};

export default Sidebar;