import React from 'react';
import './Topbar.css';

function Topbar() {
    return (
        <div className="topbar">
            <dic className="social_icons">
                <i className="icon fa fa-facebook"></i>
                <i className="icon fa fa-instagram"></i>
                <i className="icon fa fa-facebook"></i>
                <i className="icon fa fa-instagram"></i>
            </dic>
            <div className="nav_items">
                <ul className="top_list">
                    <li className="top_list_item">Home</li>
                    <li className="top_list_item">About</li>
                    <li className="top_list_item">Contact</li>
                    <li className="top_list_item">Write</li>
                    <li className="top_list_item">Logout</li>
                </ul>
            </div>
            <div className="profile">
                
                <img src="/images/profile.png" className="profile_image" alt="Profile"/>
                <i class="search_icon fa fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
