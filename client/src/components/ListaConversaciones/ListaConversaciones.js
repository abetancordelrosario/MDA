import React, {useState, useEffect} from 'react';
import './ListaConversaciones.css';
import {getMessages} from '../../services/messageService';
import {insertMessage} from '../../services/messageService';
import {useLocation, useParams} from 'react-router-dom';
import Header from '../Header/Header';
import Editor from '../Editor/Editor'

function ListaConversaciones () {
    const params = useParams();
    const subjectId = params.id;
    const [messagesData, setmessagesData] = useState([]);
    
    useEffect(() => {
        let filters = {
            subjectid: subjectId
        }
        const messages = async () => {
            const response = await getMessages(filters);
            setmessagesData(response);
        }
        messages();
    }, []);

    function handleSubmit(event) {
        let messageInfo = {
            subjectid: subjectId,
            userid: sessionStorage.userId,
            title: event.target.elements.titulo.value,
            message: event.target.elements.mensaje.value
        }

        insertMessage(messageInfo);

    }
    

    return (
        <div className="foro">
            <Header/>
            <Editor/>
            <div class="title">
                <h2>Conversaciones</h2>
            </div>
            <div class="conversaciones">
                <p id="subtitle">Conversaciones Abiertas</p>
                {sessionStorage.userId && (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="mensaje">Titulo: </label>
                        <input id='titulo' name='titulo' type="text"></input>
                        <label htmlFor="mensaje">Mensaje: </label>
                        <input id='mensaje' name='mensaje' type="text"></input>
                        <button type="submit">Añadir: </button>
                    </form>
                )}
                <div class="lista-conversaciones">
                    {messagesData.map((value,key) => {
                        return  <div class="conversacion">
                                     <a href={"/message/" + value.ID}><li>{value.TITLE}</li></a>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListaConversaciones;