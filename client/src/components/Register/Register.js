import React from 'react';
import './Register.css';
import {getAllUsers, createUser} from '../../services/userService'
let md5 = require("md5")

class Register extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const user = event.target.elements.usuario.value
        console.log(event.target.elements.nombre.value)
        console.log(event.target.elements.apellidos.value)
        console.log(event.target.elements.correo.value)
        console.log(event.target.elements.telefono.value)
        console.log(event.target.elements.universidad.value)
        const password = md5(event.target.elements.contra.value);
        // console.log(event.target.elements.repcontra.value)
        createUser(user)
    }

    render() {
        return (
            <div className="register-page">
                <form onSubmit={this.handleSubmit}>
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
        )
    }

}
export default Register;