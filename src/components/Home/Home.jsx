import React from 'react';
import s from './Home.module.css'
import { useDispatch } from 'react-redux'
import axios from 'axios';

const Home = ({ posts }) => {
    const [postItem, setPostItem] = React.useState('');
    const [body, setbody] = React.useState('');
    const [title, setTitle] = React.useState('');
    const dispatch = useDispatch();
    const [visiblePop, setVisiblePop] = React.useState(false);
    console.log(posts);
    const handleInput = (e) => {
        setPostItem(e.target.value);
    }
    console.log(postItem)
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: postItem,
            title: 'my_own'
        }).then(res => console.log(res.data.body))
        // setPostItem('');
        setVisiblePop(true);
    }
    const closePop = () => {
        setVisiblePop(false)
    }
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(10);
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = postItem.slice(indexOfFirstPost, indexOfLastPost)
    const totalPost = postItem.length
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={s.posts_wrapper}>
            <form onSubmit={onSubmit}>

                <input onChange={handleInput} type="text" placeholder='Type your post' />
                <button type='submit'>SEND</button>
                {
                    posts.map((el) => <div className={s.posts_holder}>
                        <p className={s.post_text}>{el.title}</p>
                    </div>)
                }
                {
                    visiblePop ? <div className={s.pop_post}>
                        <p><b>Your post was submited</b></p>
                        <p><b>Your text is:</b> {postItem}</p>
                        <button onClick={closePop}>Close</button>
                    </div>
                        : <div> <h1>Error </h1>
                        </div>
                }
                 {pageNumbers.map((page, index) => <span onClick={() => dispatch(setCurrentPage(page))} className={currentPage === (index + 1) ? 'activePage' : 'page'}>
                    {page}
                </span>)}
            </form>

        </div>
    );
}

export default Home;
