import React from 'react';
import SinglePost from '../single-post/SinglePost';
import './Posts.css';

function Posts() {
    return (
        <div className="posts">
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
           <SinglePost/> 
        </div>
    )
}

export default Posts;
