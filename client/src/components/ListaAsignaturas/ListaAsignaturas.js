import React from 'react';
import './ListaAsignaturas.css'

const asignaturas = ["Física", "Matemáticas", "P1", "DW2"];

function ListaAsignaturas () {

    const lista = <ListarAsignaturas subjects={asignaturas} />;

    return (
        <div className="foro">
            <div class="title">
                <h2>Título de la Universidad</h2>
            </div>
            <div class="asignaturas">
                <p id="subtitle">Asignaturas</p>
                <div class="lista-asignaturas">
                    {lista}
                </div>
            </div>
        </div>
    )
}

function ListarAsignaturas(props) {
    const subjects = props.subjects;
    const listar = subjects.map((subject) =>
        <div class="asignatura">
            <a href="#"><li>{subject}</li></a>
        </div>
    );
    return (
        <ul>{listar}</ul>
    );
}

export default ListaAsignaturas;