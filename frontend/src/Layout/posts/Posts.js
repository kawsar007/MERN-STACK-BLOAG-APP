import React from 'react';
import Post from './post/Post';
//import SinglePost from '../../components/single-post/SinglePost';
import './Posts.css';

function Posts() {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
           {/* <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/>  */}
        </div>
    )
}

export default Posts;
