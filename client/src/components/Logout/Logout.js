import React from 'react';
import './Logout.css';
import {Link, useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {getUser} from '../../services/userService';
let md5 = require("md5");


const Logout = () =>  {

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault()

        sessionStorage.clear();
        if (window.location.pathname == "/") {
            window.location.reload(false);
        } else {
            navigate(`/`);
        }

    }


        return(
            <Popup trigger={<button className='login-button'>Bienvenido</button>} position="bottom center">
                <div className="logout-popup">
                    <button className="logout-button"><Link to="/">Inicio</Link></button>
                    <button className="logout-button"><Link to='/profile/:name&:passwd&:email&:phone&:surname'>Perfil</Link></button>
                    <button className="logout-button" onClick={handleSubmit}>Cerrar Sesión</button>
                </div>
            </Popup>
    )
}

export default Logout;
