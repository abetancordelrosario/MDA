import React from 'react';
import './Header.css';
import Login from "../Login/Login";

function Header () {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div id="brand-logo">
                        <a href="/src/profile-page.js"><h1>EstuFor-U</h1></a>
                    </div>
                </div>
                <div className='col-lg-6 login'>
                    <div id="login-button">
                        <Login />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;