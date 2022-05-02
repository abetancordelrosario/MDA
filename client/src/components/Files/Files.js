import React from 'react';
import './Files.css';


function Files ({subject, files}) {

    function handleSubmit(fileName) {

        if (!sessionStorage.userId) {
            console.log("No has iniciado sesión");
            return;
        }

        if (sessionStorage.userPoints <= 0) {
            console.log("No tienes puntos desgraciado");
            return;
        }

        var dir = "/documents/" + subject + "/" + fileName;

        window.location.href = dir;

    }

    return (

        <div>
            {files.map((value,key) => {
                return  <div class="conversacion">
                            <label onClick={() => handleSubmit(value)}>{value}</label>
                        </div>
            })}
        </div>
    )
}

export default Files;