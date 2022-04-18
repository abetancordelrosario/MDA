import React from 'react';
import './ListaAsignaturas.css'

function ListaAsignaturas () {
    return (
        <div className="foro">
            <div class="title">
                <h2>Título de la Universidad</h2>
            </div>
            <div class="conversaciones">
                <p id="subtitle">Asignaturas</p>
                <div class="lista-conversaciones">
                <div class="conversacion">
                    <a href="#"><span>Titulo Asignatura</span></a>
                    <span>Facultad</span>
                </div>
                <div class="conversacion">
                    <a href="#"><span>Titulo Asignatura</span></a>
                    <span>Facultad</span>
                </div>
                <div class="conversacion">
                    <a href="#"><span>Titulo Asignatura</span></a>
                    <span>Facultad</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ListaAsignaturas;