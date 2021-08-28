import React from 'react';
import './SinglePost.css';

export default function SinglePost() {
    return (
        <div className="single-post">
            <div className="single-post-warpper">
                <img src="/images/blog.jpg" alt="BlogImg" className="single-post-img"/>
                <div className="single-post-title">
                    <h2 className="post-title">In publishing and graphic placeholder.
                        <div className="single-post-edit">
                        <i className="single-post-icon fa fa-edit"></i>
                        <i className="single-post-icon fa fa-trash"></i>
                        </div>
                    </h2>
                </div>
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author: <b>Kawsar Ahamed</b>
                    </span>
                    <span className="single-post-date">1 hour ago</span>
                </div>
                <p className="single-post-desc">In publishing and graphic design, Lorem ipsum is a placeholder single-post-icon In publishing and graphic design, Lorem ipsum is a placeholder single-post-iconIn publishing and graphic design, Lorem ipsum is a placeholder single-post-iconIn publishing and graphic design, Lorem ipsum is a placeholder single-post-iconIn publishing and graphic design, Lorem ipsum is a placeholder single-post-iconIn publishing and graphic design, Lorem ipsum is a placeholder single-post-iconIn publishing and graphic design, Lorem ipsum is a placeholder single-post-icon</p>
            </div>
        </div>
    )
}
