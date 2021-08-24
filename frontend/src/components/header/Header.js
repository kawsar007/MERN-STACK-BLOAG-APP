import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="/images/header.jpg" className="headerImg" alt="blog"/>
        </div>
    )
}

export default Header
