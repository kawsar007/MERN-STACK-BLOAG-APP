import React from 'react';
import './WritePost.css';

export default function WritePost() {
    return (
        <div className="write-post">
            <img src="/images/nature1.jpg" alt="nature" className="write-img"/>
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className="write-icon fa fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea placeholder="Tell your story..."
                     type="text" className="write-input write-text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}
