import React from 'react';
import s from "./Profile.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ data, photosItem, loading }) => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = React.useState(1);
    const [photosPerPage, setPhotosPerPage] = React.useState(8);
    const userN = data.filter((user) => user.id == id)
    const photosData = useSelector((state) => {
        const { photosReducer } = state;
        return photosReducer.photos
    });
    const indexOfLastPhoto = currentPage * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhoto = photosItem.slice(indexOfFirstPhoto, indexOfLastPhoto)
    const totalPhotos = photosItem.length
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i);
    }
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
                                <p>
                                    {user.username}
                                </p>
                                <p className={s.u_status}>
                                    {user.status}
                                </p>
                                <p>{user.birthDate}</p>
                            </div>
                        </div>

                    </div>
                ))

            }



            <div className={s.user_photos}>
                {currentPhoto.map((el, index) => (
                    <NavLink to={`/card/${el.id}`} key={index}><img src={el.url} className={s.user_photo_img} alt='photo' /> </NavLink>
                ))}
            </div>

            <div className="pages_wrapper">
                {pageNumbers.map((page, index) => <span onClick={() => dispatch(setCurrentPage(page))} key={index} className={currentPage === (index + 1) ? 'activePage' : 'page'}>
                    {page}
                </span>)}
            </div>

        </div>

    );
};

export default Profile;