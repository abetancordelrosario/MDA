import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import './Register.css';
import {createUser} from '../../services/userService'
import {Link, useNavigate} from 'react-router-dom';
let md5 = require("md5")


const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let userInfo = {
            name: event.target.elements.nombre.value,
            surname: event.target.elements.apellidos.value,
            display_name: event.target.elements.usuario.value,
            email: event.target.elements.correo.value,
            phone: event.target.elements.telefono.value,
            passwd: md5(event.target.elements.contra.value),
            rol: 1, 
            points: 2, 
            organization: event.target.elements.universidad.value,
            time_stamp: "17/03/2022 12:12:25"
        }
        createUser(userInfo)
        navigate("/")
    }

        return (
            <div>
            <Header />
            <div className="register-page">
                <form onSubmit={handleSubmit}>
                    <div className="register-form">
                        <h2>¡Regístrate!</h2>
                        <div class="col">
                            <label>Usuario</label>
                            <input type="text" class="form-control" name="usuario"></input>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Nombre</label>
                                <input type="text" class="form-control" name="nombre"/>
                            </div>
                            <div class="col">
                                <label>Apellidos</label>
                                <input type="text" class="form-control" name="apellidos"/>
                            </div>
                        </div>
                        <div class="col">
                            <label>Correo Electrónico</label>
                            <input type="email" class="form-control" name="correo"/>
                        </div>
                        <div class="col">
                            <label>Teléfono</label>
                            <input type="text" class="form-control" name="telefono"/>
                        </div>
                        <div class="col">
                            <label>Universidad</label>
                            <input type="text" class="form-control" name="universidad"/>
                        </div>
                        <div class="col">
                            <label>Contraseña</label>
                            <input type="passwd" class="form-control" name="contra"/>
                        </div>
                        <div class="col">
                            <label>Repite tu contraseña</label>
                            <input type="passwd" class="form-control" name="repcontra"/>
                        </div>
                    </div>
                    <div className="login-button">
                        <button type="submit">Regístrate</button>
                    </div>
                </form>
            </div>
            <Footer />
            </div>
        )
    

}
export default Register;