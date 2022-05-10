import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer>
            <div className='container-texto'>
                <h2>¡Empecemos!</h2>
            </div>
            <div className="container-button">
                <button className="register-button-footer"><Link to="/register">Regístrate</Link></button>
            </div>
            <div className="container-Copyright">
                <span>Copyright © 2022  Estufor-U. All rights reserved</span>
            </div>
        </footer>
    )
}



export default Footer;