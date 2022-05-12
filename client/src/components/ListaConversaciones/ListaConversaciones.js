import React, {useState, useEffect} from 'react';
import './ListaConversaciones.css';
import {getMessages} from '../../services/messageService';
import { getSubjects } from '../../services/subjectService';
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

    return (
        <div className="foro">
            <Header/>
            
            <div class="title">
                <h2>Conversaciones</h2>
            </div>
            <div class="conversaciones">
                <p id="subtitle">Conversaciones Abiertas</p>
                <Editor/>
                <br></br>
                <br></br>
                {sessionStorage.userId && (
                    <FilesUpload subject={dataPrueba.subject} userId={sessionStorage.userId}/>
                )}
                <br></br>
                <br></br>
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

