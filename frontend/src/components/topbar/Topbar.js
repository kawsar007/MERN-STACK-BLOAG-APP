import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          <li className="top_list_item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="top_list_item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="profile">
        {user ? (
          <img src={user.profilePic} className="profile_image" alt="Profile" />
        ) : (
          <ul className="top_list">
            <li className="top_list_item" style={{ marginRight: "20px" }}>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="top_list_item">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Topbar;
