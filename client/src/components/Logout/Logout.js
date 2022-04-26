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
            <div className="logout-form">
                <button id="logout-button" onClick={handleSubmit}>LogOut</button>
            </div>
    )
}

export default Logout;
