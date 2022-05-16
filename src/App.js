import './App.css';
import React, {useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import {fetchUsers, setLoaded} from "./redux/actions/getUsers";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Item from './components/Item/Item'
import axios from 'axios';
import { fetchPhotos } from './redux/actions/getPhotos';
import { photosReducer } from './redux/reducers/photosReducer';
function App() {
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPhotos());
        
    }, []);

    const item = useSelector(state => {
        const {usersReducer} = state;
        return usersReducer.users
    });
    const photoItems = useSelector(state =>{
        console.log('photos reducer', state);
        const {photosReducer} = state;
        return photosReducer.photos
       
    })
    
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path='/profile/:id' element={<Profile data={item} photos={photoItems} />}/>)
                    <Route path="/dialog/:id" element={<Dialogs data={item}/>}/>
                    <Route path='/card/:id' element={<Item photos={photoItems}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
