import React from 'react';
import './Logout.css';
import {Link, useNavigate} from 'react-router-dom';


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
            <button className="logout-button" onClick={handleSubmit}>Cerrar Sesión</button>
    )
}

export default Logout;
