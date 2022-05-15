import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import { getSubjects } from '../../services/subjectService';

function Home () {
    let subjects = [];
    getSubjects().then(results => {
        results.forEach(result => {
            subjects.push(result);
        });
    })

    

    return (
        <div className="container-fluid">
            <Header /> 
            <div className="home-page">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <SearchBar placeholder="Universidad, facultad, asignatura..." data={subjects}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;