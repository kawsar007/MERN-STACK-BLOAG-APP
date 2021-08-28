import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="single_post">
           <img src="/images/blog1.jpg" className="postImg" alt="Blog"/>
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Music</span>
                   <span className="postCat">Life</span>
               </div>
               <span className="postTitle">React Blog Website Design Tutorial </span>
               <hr/>
               <span className="postDate">1 hour ago</span>
           </div>
           <p className="post_description">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>
        </div>
    )
}

export default Post;
