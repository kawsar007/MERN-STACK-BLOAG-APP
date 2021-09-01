import React from 'react';
import { Link } from 'react-router-dom';
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
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButn">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}