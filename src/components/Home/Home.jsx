import React from 'react';
import s from './Home.module.css'
import { useDispatch } from 'react-redux'
import axios from 'axios';

const Home = ({ posts }) => {
    const [postItem, setPostItem] = React.useState('');
    const dispatch = useDispatch();
    const [visiblePop, setVisiblePop] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(5);
    const handleInput = (e) => {
        setPostItem(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: postItem,
            title: 'my_own'
        }).then(res => console.log(res.data))
        // setPostItem('');
        setVisiblePop(true);
    }
    const closePop = () => {
        setVisiblePop(false)
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPost = posts.length
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={s.posts_wrapper}>
            <form onSubmit={onSubmit} className={s.postsForm}>

                <div className={s.post_area}> <input onChange={handleInput} type="text" placeholder='Type your post' /></div>
                <div className={s.btn_wrapper}>  <button type='submit'>SEND</button></div>
                {
                    currentPost.map((el, index) => <div className={s.posts_holder} key={index}>
                        <p className={s.post_text}>{el.title}</p>
                    </div>)
                }
                {
                    visiblePop ? <div className={s.pop_post}>
                        <p><b>Your post was submited</b></p>
                        <p><b>Your text is:</b> {postItem}</p>
                        <button onClick={closePop}>Close</button>
                    </div>
                        : ''
                }
                <div className="pages_wrapper">
                    {<span onClick={() => setCurrentPage(currentPage + 1)}>Next</span>}
                    <div className={s.pagination}>
                        {pageNumbers.map((page, index) => <span onClick={() => dispatch(setCurrentPage(page))} className={currentPage === (index + 1) ? 'activePage' : 'page'}>
                            {page}
                        </span>)}
                    </div>
                    <div className={s.pageCounter}>
                        <span>{currentPage}/{Math.ceil(totalPost / postPerPage)}</span>
                    </div>
                    {<span onClick={() => setCurrentPage(currentPage - 1)}>Previous </span>}
                </div>
            </form>

        </div>
    );
}

export default Home;
