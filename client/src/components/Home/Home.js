import React from 'react';
import './Home.css'

function Home () {
    return (
        <div className="home-page">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
            <div class="search">
                <div class="search-container">
                    <h4>Haz tu búsqueda</h4>
                    <input type="text" className="form-control-lg col-sm-8" name="buscador" placeholder='Universidad, facultad, asignatura...'></input>
                </div>
            </div>
        </div>
    )
}

export default Home;