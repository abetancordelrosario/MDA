import React from 'react';
import './ListaConversaciones.css'

const conversaciones = ["Examen Resuelto MDA", "Duda duración Sprints", "Resumen Método Scrum"];

function ListaConversaciones () {

    const lista = <ListarConversaciones convers={conversaciones} />;

    return (
        <div className="foro">
            <div class="title">
                <h2>Conversaciones</h2>
            </div>
            <div class="conversaciones">
                <p id="subtitle">Conversaciones Abiertas</p>
                <div class="lista-conversaciones">
                    {lista}
                </div>
            </div>
        </div>
    )
}

function ListarConversaciones(props) {
    const convers = props.convers;
    const listar = convers.map((conver) =>
        <div class="conversacion">
            <a href="# "><li>{conver}</li></a>
        </div>
    );
    return (
        <ul>{listar}</ul>
    );
}

export default ListaConversaciones;

