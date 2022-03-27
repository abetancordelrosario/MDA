import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Login.css';

export default () => (
    <Popup trigger={<a href='#!' class="container-button">Iniciar Sesión</a>} position="bottom center">
        <div className="login-form">
        <form>
        <div class="form-outline mb-4">
            <input type="text" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Usuario</label>
        </div>

        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Contraseña</label>
        </div>

        <div class="row mb-4 passwd">
            <div class="col d-flex justify-content-center">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                        checked
                    />
                    <label class="form-check-label" for="form2Example31">Recuérdame</label>
                </div>
            </div>

            <div class="col d-flex justify-content-center">
                <a href="#!">¿Olvidaste la contraseña?</a>
            </div>
        </div>

        <div className="login-button">
        <button type="button" class="btn btn-primary btn-block mb-4">Iniciar Sesión</button>
        </div>

        <div class="text-center">
            <p>¿Aún no estás registrado? <a href="#!">Regístrate</a></p>
        </div>
        </form>
        </div>
    </Popup>
);