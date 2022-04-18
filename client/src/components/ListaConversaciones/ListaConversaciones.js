import React from 'react';
import './ListaConversaciones.css'

function ListaConversaciones () {
    return (
        <div className="foro">
            <div class="title">
                <h2>Título de la Asignatura</h2>
            </div>
            <div class="conversaciones">
                <p id="subtitle">Conversaciones abiertas</p>
                <div class="lista-conversaciones">
                <div class="conversacion">
                    <a href="#"><span>Titulo Conversación</span></a>
                    <span>Autor</span>
                </div>
                <div class="conversacion">
                    <a href="#"><span>Titulo Conversación</span></a>
                    <span>Autor</span>
                </div>
                <div class="conversacion">
                    <a href="#"><span>Titulo Conversación</span></a>
                    <span>Autor</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ListaConversaciones;