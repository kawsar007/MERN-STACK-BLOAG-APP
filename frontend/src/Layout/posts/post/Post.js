import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="single_post">
      {post.photo && (
        <img src={PF + post.photo} className="postImg" alt="Blog" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.category.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post_description">{post.desc}</p>
    </div>
  );
}

export default Post;
