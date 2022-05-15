import React from 'react';
import './Header.css';
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import {Link} from 'react-router-dom';


function Header () {
    return (
        <div className="header">
            <Link to="/"><img src="/Estufor-U.png" alt="" className="logo"></img></Link>
            <div className="buttons">
                {!sessionStorage.userId && (
                    <div>
                        <Login />
                        <button className='register-button'><Link to="/register">Registrarse</Link></button>
                    </div>
                )}
                {sessionStorage.userId && (
                    <Logout />
                )}
            </div>
        </div>
    )
}

export default Header;