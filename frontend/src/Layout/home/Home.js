import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../posts/Posts';
//import Posts from '../posts/Posts';
//import Sidebar from '../sidebar/Sidebar';
import './Home.css';

function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
