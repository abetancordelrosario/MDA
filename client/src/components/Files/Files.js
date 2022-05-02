import React from 'react';
import './Files.css';
import { updateUserPoints } from '../../services/userService';


function Files ({subject, files}) {

    function handleSubmit(fileName) {

        if (!sessionStorage.userId) {
            alert("No has iniciado sesión");
            return;
        }

        if (sessionStorage.userPoints <= 0) {
            alert("No tienes puntos desgraciado");
            return;
        }

        sessionStorage.setItem("userPoints", parseInt(sessionStorage.userPoints)-1);

        var dir = "/documents/" + subject + "/" + fileName;
        var userId = sessionStorage.userId;
        var userPoints = sessionStorage.userPoints;

        let pointsInfo = {
            userId: userId,
            type: "subtract",
            userPoints: userPoints
        }

        updateUserPoints(pointsInfo);

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