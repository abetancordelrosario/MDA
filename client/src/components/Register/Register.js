import React from 'react';
import './Register.css'

function Register () {
    return (
        <div className="register-page">
            <form>
                <div className="register-form">
                    <h2>¡Regístrate!</h2>
                    <div class="col">
                        <label>Usuario</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Nombre</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="col">
                            <label>Apellidos</label>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="col">
                        <label>Correo Electrónico</label>
                        <input type="email" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Teléfono</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Universidad</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Contraseña</label>
                        <input type="passwd" class="form-control"/>
                    </div>
                    <div class="col">
                        <label>Repite tu contraseña</label>
                        <input type="passwd" class="form-control"/>
                    </div>
                </div>
                <div className="login-button">
                    <button>Regístrate</button>
                </div>
            </form>
        </div>
    )
}

export default Register;