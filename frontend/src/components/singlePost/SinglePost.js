import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./SinglePost.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-warpper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="single-post-img" />
        )}

        <div className="single-post-title">
          <h2 className="post-title">
            {post.title}
            <div className="single-post-edit">
              <i className="single-post-icon fa fa-edit"></i>
              <i className="single-post-icon fa fa-trash"></i>
            </div>
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
