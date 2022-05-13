import React from 'react';
import './Profile.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useLocation, useParams, Link} from 'react-router-dom';
import md5 from 'md5';
import { updateUserPassword } from '../../services/userService';


function Profile () {

    const params = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()

        let userData = {
            name: params.name,
            surname: params.surname,
            display_name: params.display_name,
            email: params.email,
            phone: params.phone,
            passwd: md5(event.target.elements.renew.value),
            rol: 1, 
            points: 2, 
            organization: params.organization,
            time_stamp: "17/03/2022 12:12:25"
        }
        
        updateUserPassword(userData)

    }

    return (
        <div>
           <Header /> 
            <div className="profile-page">
                <form onSubmit={handleSubmit}>
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
                                <input type="passwd" class="form-control" name="actual"/>
                            </div>
                            <div class="col">
                                <label>Contraseña Nueva</label>
                                <input type="passwd" class="form-control" name="new"/>
                            </div>
                            <div class="col">
                                <label>Repetir Contraseña</label>
                                <input type="passwd" class="form-control" name="renew"/>
                            </div>
                            <div>
                                <button type="submit">Confirmar</button>
                            </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;