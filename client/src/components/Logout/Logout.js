import React from 'react';
import './Logout.css';
import {Link, useNavigate} from 'react-router-dom';


const Logout = () =>  {

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault()

        sessionStorage.clear();
        navigate(`/`)

    }


        return(
            <div className="logout-form">
                <button onClick={handleSubmit}>LogOut</button>
            </div>
    )
}

export default Logout;
