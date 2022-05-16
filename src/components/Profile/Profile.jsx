import React from 'react';
import s from "./Profile.module.css";
import { NavLink, useParams } from "react-router-dom";

const Profile = ({ data, photos }) => {
    console.log(data);
    const { id } = useParams();
    console.log(id);
    const userN = data.filter((user) => user.id == id)
    return (
        <div className={s.user_page}>
            {
                userN.map((user) => (
                    <div className={s.container} key={user.id}>
                        <div className={s.user_info}>
                            <div className={s.user_avatar}>
                                <img src={user.avatar ? user.avtar : 'https://studentsgowest.com/wp-content/uploads/default-profile-image-png-1-Transparent-Images.png'} alt="ava" />
                            </div>
                            <div className={s.user_description}>
                                <p className={s.u_name}>
                                    {user.name}
                                </p>
                                {/* <p className={s.u_status}>
                                    {user.status}
                                </p> */}
                                {/* <p>{user.birthDate}</p> */}
                            </div>
                        </div>

                    </div>
                ))
            }
            <div className={s.user_photos}>
                {photos.map((el) => (
                    <NavLink to={`/card/${el.id}`}><img src={el.url} className={s.user_photo_img} alt='photo' /> </NavLink>
                ))}
            </div>

        </div>

    );
};

export default Profile;