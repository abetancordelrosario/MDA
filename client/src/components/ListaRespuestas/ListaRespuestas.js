import React from "react";
import './ListaRespuestas.css'

const respuestas = ["F", "¿Me lo cargo al hombro?", "Eran 6 motoristas que eran motos"];

function ListaRespuestas () {

    const lista = <ListarRespuestas answers={respuestas}/>;

    return (
        <div className="foro">
            <div class="title">
                <h2>Conversaciones</h2>
            </div>
            <div class="respuestas">
                <p id="subtitle">Conversaciones Abiertas</p>
                <div class="lista-respuestas">
                    {lista}
                </div>
            </div>
        </div>
    )

}

function ListarRespuestas(props) {
    const answers = props.answers;
    const listar = answers.map((answer) =>
    <div class="respuesta">
        <a href="# "><li>{answer}</li></a>
    </div>
    );
    return (
        <ul>{listar}</ul>
    );
}

export default ListaRespuestas;
