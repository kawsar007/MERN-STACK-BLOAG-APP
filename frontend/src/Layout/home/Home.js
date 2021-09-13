import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../posts/Posts';
import './Home.css';

function Home() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
       const fetchPosts = async () => {
           const res = await axios.get("/posts");
           setPosts(res.data);
       }
       fetchPosts();
    }, []);
    
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
