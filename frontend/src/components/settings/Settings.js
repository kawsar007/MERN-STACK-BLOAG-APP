import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Settings.css';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update your account</span>
                    <span className="settings-delete-title">Delete account</span>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-profile">
                        <img src="./images/nature1.jpg" alt="profile"/>
                        <label htmlFor="fileInput">
                            <i className="settings-profile-icon fa fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Kawsar Ahamed"/>
                    <label>Email</label>
                    <input type="email" placeholder="imkawsar007@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
