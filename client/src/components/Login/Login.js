import {React} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Login.css';


const Login = () => {
    const handleSubmit = async (e) => {
        const username = document.getElementById("form2Example1").value;
        const password = document.getElementById("form2Example31").value;
        
    }

        return (
        <Popup trigger={<a href='#!' class="container-button">Iniciar Sesión</a>} position="bottom center">
            <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">Usuario</label>
                    <input 
                        type="text" 
                        id="form2Example1" 
                        className="form-control" 
                        />                 
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Contraseña</label>
                    <input type="password" id="form2Example2" class="form-control" />
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
    );
}

export default Login;