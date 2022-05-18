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
import Messages from '../Messages/Messages';
import Pagination from '../Pagination/Pagination';

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
            {data && <Prueba dataPrueba={data} subjectId={subjectId} />}
        </div>
    );
    
}

function Prueba({dataPrueba, subjectId, setRefrescomponent}){

    const [currentPage, setCurrentPage] = useState(1);
    const [messagesPerPage] = useState(5);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentMessages = dataPrueba.messages.slice(indexOfFirstMessage, indexOfLastMessage);

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
                    {dataPrueba.messages == null && (
                        <div className="respuesta">
                            <p>No hay conversaciones abiertas</p>
                        </div>
                    )}
                    <Messages messages={currentMessages}/>
                    <br/>
                    <Pagination
                        messagesPerPage={messagesPerPage}
                        totalMessages={dataPrueba.messages.length}
                        paginate={paginate}
                    />
                </div>
                <br></br>
                <br></br>
                {sessionStorage.userId && (
                    <div>
                        <p className="subtitle">Crear conversación nueva</p>
                        <Editor subjectId={subjectId} refreshComponent={setRefrescomponent} TIPO="conver"/>
                    </div>                    
                )}
                <br></br>
                <br></br>
                <div class="title">
                    <h2>Archivos</h2>
                </div>
                <p className="subtitle">Archivos subidos</p>
                {dataPrueba.files == null && (
                    <div className='respuesta'>Aún no hay archivos subidos</div>
                )}
                {dataPrueba.files != null && <Files subject={dataPrueba.subject} files={dataPrueba.files}/>}
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