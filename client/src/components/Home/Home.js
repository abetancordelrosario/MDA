import React from 'react';
import './Home.css'

function Home () {
    return (
        <div className="home-page">
            <input type="text" class="form-control-lg col-sm-8" name="buscador" placeholder='Universidad, facultad, asignatura...'></input>
        </div>
    )
}

export default Home;