import React, {useState, useEffect} from 'react';
import './ListaConversaciones.css';
import {getMessages} from '../../services/messageService';
import { getSubjects } from '../../services/subjectService';
import {insertMessage} from '../../services/messageService';
import {useLocation, useParams} from 'react-router-dom';
import Header from '../Header/Header';
import Editor from '../Editor/Editor';
import FilesUpload from '../FilesUpload/FilesUpload';
import Files from '../Files/Files';
import { getFiles } from '../../services/fileService';
import {deleteMessage} from '../../services/messageService';
import moment from 'moment';

function ListaConversaciones () {
    const [data, setData] = useState(null);
    
    const params = useParams();
    const subjectId = params.id;
    
    useEffect(() => {
        let filters = {
            subjectid: subjectId
        }
        const messages = async () => {
            let data = {};
            const messages = await getMessages(filters);
            const subjects = await getSubjects(subjectId);
            let subjectName = subjects[0].NAME.split(' ').join('_');
            const files = await getFiles(subjectName);

            data.messages = messages;
            data.subject = subjectName;
            data.files = files;

            setData(data);
        }
        messages();
    }, []);
    
    return (
        <div>
            {data && <Prueba dataPrueba={data} subjectId={subjectId}/>}
        </div>
    );
    
}

function Prueba({dataPrueba, subjectId}){

    function handleSubmit(event) {
        event.preventDefault();
        let messageInfo = {
            subjectid: subjectId,
            userid: sessionStorage.userId,
            title: event.target.elements.titulo.value,
            message: event.target.elements.mensaje.value
        }

        insertMessage(messageInfo);


    }
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
        <div className="foro">
            <div className="bg-static"></div>
            <Header/>
            <div class="conversaciones">
                <div className="title">
                    <h2>Conversaciones</h2>
                </div>
                <p className="subtitle">Conversaciones abiertas</p>
                <div class="listado">
                    {dataPrueba.messages.map((value,key) => {
                        return  <div class="conversacion">
                            <a href={"/message/" + value.ID}><li>{value.TITLE} {moment(value.TIME_STAMP).format('DD-MM-YYYY HH:mm')}</li></a>
                            {sessionStorage.userId == value.USERID && (
                                <form onSubmit={e => handleDelete(e, value.ID, value.TIME_STAMP)}>
                                    <button className="submit-button-delete" type="submit">Borrar</button>
                                </form>
                            )}
                        </div>
                    })}
                </div>
                <br></br>
                <br></br>
                {sessionStorage.userId && (
                    <div>
                        <p className="subtitle">Crear conversación nueva</p>
                        <Editor subjectId={subjectId} TIPO="conver"/>
                    </div>
                )}
                <br></br>
                <br></br>
                <div class="title">
                    <h2>Archivos</h2>
                </div>
                <p className="subtitle">Archivos subidos</p>
                {dataPrueba.files && <Files subject={dataPrueba.subject} files={dataPrueba.files}/>}
                <br></br>
                <br></br>
                {sessionStorage.userId && (
                    <div>
                        <p className="subtitle">Subir archivo</p>
                        <FilesUpload subject={dataPrueba.subject} userId={sessionStorage.userId}/>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default ListaConversaciones;