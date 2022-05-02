import React, {useState, useEffect} from 'react';
import './ListaConversaciones.css';
import {getMessages} from '../../services/messageService';
import { getSubjects } from '../../services/subjectService';
import {insertMessage} from '../../services/messageService';
import {useLocation, useParams} from 'react-router-dom';
import Header from '../Header/Header';
import Editor from '../Editor/Editor'
import FilesUpload from '../FilesUpload/FilesUpload';
import Files from '../Files/Files';
import { getFiles } from '../../services/fileService';

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
                <br></br>
                <br></br>
                {sessionStorage.userId && (
                    <FilesUpload subject={dataPrueba.subject} userId={sessionStorage.userId}/>
                )}
                <br></br>
                <br></br>
                <div class="lista-conversaciones">
                    {dataPrueba.messages.map((value,key) => {
                        return  <div class="conversacion">
                                     <a href={"/message/" + value.ID}><li>{value.TITLE}</li></a>
                                </div>
                    })}
                </div>
                <div class="title">
                    <h2>Archivos</h2>
                </div>
                {dataPrueba.files && <Files subject={dataPrueba.subject} files={dataPrueba.files}/>}
            </div>
        </div>
    )
}

export default ListaConversaciones;