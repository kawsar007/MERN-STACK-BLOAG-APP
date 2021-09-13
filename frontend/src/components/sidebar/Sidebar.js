import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="/images/about.jpg" className="about-img" alt="about" />
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORY</span>
                <ul className="sidebarList">
                     <li className="sidebarListItem">Music</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                <i className="icon fa fa-facebook"></i>
                <i className="icon fa fa-instagram"></i>
                <i className="icon fa fa-facebook"></i>
                <i className="icon fa fa-instagram"></i>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
