import React from 'react';
import './Home.css'

function Home () {
    return (
        <div className="container-fluid">
            <Header /> 
            <div className="home-page">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <SearchBar placeholder="Universidad, facultad, asignatura..." data={subjects}/>
            </div>
        </div>
    )
}

export default Home;