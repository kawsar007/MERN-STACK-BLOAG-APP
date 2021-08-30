import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input type="text" className="login-input" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="text" className="login-input" placeholder="Enter your password..."/>
                <button className="login-button">Login</button>
            </form>
            <button className="register-button">Register</button>
        </div>
    )
}
