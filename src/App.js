import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchUsers } from "./redux/actions/getUsers";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Item from './components/Item/Item'
import { fetchPhotos } from './redux/actions/getPhotos';
import { fetchPosts } from './redux/actions/getPosts';
import Home from './components/Home/Home';
import axios from 'axios';



function App({ currentPage, perPage }) {
    const dispatch = useDispatch();
    const item = useSelector(state => {
        const { usersReducer } = state;
        return usersReducer.users
    });
    const photoItems = useSelector(state => {
        const { photosReducer } = state;
        return photosReducer.photos

    })
    const posts = useSelector((state) => {
        const { postsReducer } = state;
        return postsReducer.posts
    })
    const [photosItem, setPhotosItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [postsItem, setPostsItem] = React.useState([]);
    console.log('postsItem', postsItem)
    React.useEffect(() => {
        const fetchPhotos = async () => {
            axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos/`).then((res) => {
                setPhotosItem(res.data);
            })
        }
        const fetchPosts = async () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
                setPostsItem(res.data);
            })
        }
        dispatch(fetchUsers());
        fetchPhotos();
        fetchPosts();

    }, []);



    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route path="localgram" element={<Home posts={postsItem} />} />
                    <Route path="/" element={<Home posts={postsItem} />} />
                    <Route path='/profile/:id' element={<Profile data={item} photosItem={photosItem} loading={loading} />} />)
                    <Route path="/dialog/:id" element={<Dialogs data={item} />} />
                    <Route path='/card/:id' element={<Item photosItem={photosItem}
                        loading={loading}
                    />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
