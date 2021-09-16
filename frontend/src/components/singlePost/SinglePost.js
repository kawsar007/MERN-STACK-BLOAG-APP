import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "./../../context/Context";
import "./SinglePost.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // Delete Post
  const deleteHandler = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="single-post">
      <div className="single-post-warpper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="single-post-img" />
        )}

        <div className="single-post-title">
          <h2 className="post-title">
            {post.title}
            {post.username === user?.username && (
              <div className="single-post-edit">
                <i className="single-post-icon fa fa-edit"></i>
                <i
                  className="single-post-icon fa fa-trash"
                  onClick={deleteHandler}
                ></i>
              </div>
            )}
          </h2>
        </div>
        <div className="single-post-info">
          <span className="single-post-author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
}
