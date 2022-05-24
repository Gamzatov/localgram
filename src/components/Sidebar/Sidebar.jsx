import React from 'react';
import s from './Sidebar.module.css'
import Users from "../Users/Users";
import Home from '../Home/Home';

const Sidebar = () => {
    const [menu, setMenu] = React.useState(false);
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const mobWidth = window.innerWidth;
    if (mobWidth == 1100) {
        setMenu(false);
        console.log('width', menu);
    }
    return (
        <div className={s.sidebar_wrapper}>
            <div className={s.mob_button_wrapper}>
                <button onClick={toggleMenu} className={s.mob_btn}>{menu ? <ion-icon name="menu-outline"></ion-icon> : ''}</button>
            </div>
            <div className={s.menu_wrapper}>
                <div className={menu ? s.sidebar : s.mob_sidebar}>
                    <button onClick={toggleMenu} className={!menu ? s.sidebarBtn : ''}>X</button>
                    <Users menu={menu} setMenu={setMenu} />
                </div>
            </div>

        </div>
    );
};

export default Sidebar;