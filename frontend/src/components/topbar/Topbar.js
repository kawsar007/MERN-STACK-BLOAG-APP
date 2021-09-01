import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
    const user = false;
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
                    <li className="top_list_item"><Link className="link" to="/">Home</Link></li>
                    <li className="top_list_item"><Link className="link" to="/about">About</Link></li>
                    <li className="top_list_item"><Link className="link" to="/contact">Contact</Link></li>
                    <li className="top_list_item"><Link className="link" to="/write">Write</Link></li>
                    <li className="top_list_item"><Link className="link" to="/">{user && 'Logout'} </Link></li>
                </ul>
            </div>
            <div className="profile">
                { user ? (<img src="/images/profile.png" className="profile_image" alt="Profile"/>
                ):(
                <ul className="top_list">
                     <li className="top_list_item" style={{marginRight: '20px'}}><Link to="/login" className="link">Login</Link></li>
                     <li className="top_list_item"><Link to="/register" className="link">Register</Link></li>
                </ul>)
            }
                
            </div>
        </div>
    )
}

export default Topbar
