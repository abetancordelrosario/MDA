import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home () {
    return (
        <div className="container-fluid">
            <Header /> 
            <div className="home-page">
                <input type="text" className="form-control-lg col-sm-8" name="buscador" placeholder='Universidad, facultad, asignatura...'></input>
            </div>
            <Footer />
        </div>
    )
}

export default Home;