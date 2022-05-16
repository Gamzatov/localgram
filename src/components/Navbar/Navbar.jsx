import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    <NavLink to='About'>
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Education'>
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Works'>
                        My Works
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;