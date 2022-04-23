import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Login.css';
import {getUser} from '../../services/userService'
let md5 = require("md5")


class Login extends React.Component {
     
    handleSubmit = (event) => {
        event.preventDefault()
        
        let userData = {
            display_name: event.target.elements.usuario.value,
            passwd: md5(event.target.elements.contra.value)
        }
        getUser(userData)
    }


    render() {
        return(
        <Popup trigger={<a href='#!' class="container-button">Iniciar Sesión</a>} position="bottom center">
            <div className="login-form">
            <form onSubmit={this.handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">Usuario</label>
                    <input 
                        type="text" 
                        id="form2Example1" 
                        className="form-control" 
                        name="usuario"
                        />                 
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Contraseña</label>
                    <input type="password" id="form2Example2" class="form-control" name="contra" />
                </div>

                <div className="row mb-4 passwd">
                    <div className="col d-flex justify-content-center">
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example31"
                                name="password"
                            />
                            <label className="form-check-label" htmlFor="form2Example31">Recuérdame</label>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <a href="#!">¿Olvidaste la contraseña?</a>
                    </div>
                </div>

                <div className="login-button">
                <button type="submit" class="btn btn-primary btn-block mb-4">Iniciar Sesión</button>
                </div>

                <div className="text-center">
                    <p>¿Aún no estás registrado? <a href="#!">Regístrate</a></p>
                </div>
            </form>
            </div>
        </Popup>
    )}
}

export default Login;