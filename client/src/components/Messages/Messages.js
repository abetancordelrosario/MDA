import React, {useState, useEffect} from 'react';
import '../ListaConversaciones/ListaConversaciones.css';
import {deleteMessage} from '../../services/messageService';
import moment from 'moment';

const Messages = ({messages}) => {
    
    function handleDelete(e, ID, TIME_STAMP){
        e.preventDefault();
        var fechaMensaje = moment(TIME_STAMP);
        const fecha = (new Date(Date.now())).toISOString();
        var fechaActual = moment(fecha);
        var duration = moment.duration(fechaActual.diff(fechaMensaje));
        var minutes = duration.asMinutes();
        let messageInfo = {
            id: ID
        }

        if (minutes < 30) {
            
            deleteMessage(messageInfo);
        } else {
            alert("Se te ha pasado el tiempo crack");
        }
    }

    return (
        <div>
            {messages.map((value,key) => {
                return  <div class="conversacion">
                    <a href={"/message/" + value.ID}><li>{value.TITLE} {moment(value.TIME_STAMP).format('DD-MM-YYYY HH:mm')}</li></a>
                    {sessionStorage.userId == value.USERID && (
                        <form onSubmit={e => handleDelete(e, value.ID, value.TIME_STAMP)}>
                            <button type="submit">Borrar</button>
                        </form>
                    )}
                </div>
            })}
        </div>
    )
}

export default Messages;