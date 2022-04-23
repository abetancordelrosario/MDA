import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer () {
    return (
        <footer>
            <div className='container-texto'>
                <h2>¡Empezemos!</h2>
            </div>
            <div className="container-button">
                <Link to="/register">Regístrate</Link>
            </div>
            <div className="container-Copyright">
                <span>Copyright © 2022  Estufor-U. All rights reserved</span>
            </div>
        </footer>
    )
}



export default Footer;