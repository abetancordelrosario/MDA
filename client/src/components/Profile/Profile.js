import React from 'react';
import './Profile.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useLocation, useParams} from 'react-router-dom';

function Profile () {

    const params = useParams()
    console.log(params)

    return (
        <div>
           <Header /> 
            <div className="profile-page">
                <form>
                    <div className="datos-form">
                        <h2>Datos</h2>
                        <div class="row">
                            <div class="col">
                                <label>Nombre</label>
                                <input type="text" placeholder={params.name} class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Apellidos</label>
                                <input type="text" placeholder={params.surname} class="form-control"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Correo Electrónico</label>
                                <input type="email" placeholder={params.email} class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Teléfono</label>
                                <input type="text" placeholder={params.phone} class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="passwd-form">
                        <h2>Cambiar Contraseña</h2>
                        <div class="col">
                            <label>Contraseña Actual</label>
                            <input type="passwd" class="form-control"/>
                        </div>
                        <div class="col">
                            <label>Contraseña Nueva</label>
                            <input type="passwd" class="form-control"/>
                        </div>
                        <div class="col">
                            <label>Repetir Contraseña</label>
                            <input type="passwd" class="form-control"/>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;