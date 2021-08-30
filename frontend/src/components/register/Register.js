import React from 'react';
import './Register.css';

export default function Register() {
    return (
        <div className="register">
            <span className="register-title">register</span>
            <form className="register-form">
            <label>Username</label>
                <input type="text" className="register-input" placeholder="Enter your username..."/>
                <label>Email</label>
                <input type="text" className="register-input" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="text" className="register-input" placeholder="Enter your password..."/>
                <button className="register-button">Register</button>
            </form>
            <button className="login-button">Login</button>
        </div>
    )
}