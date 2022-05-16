import React, {useState, useEffect} from 'react';
import './ListaRespuestas.css';
import {getMessages} from '../../services/messageService';
import { getResponses } from '../../services/responseService';
import {insertResponse} from '../../services/responseService';
import {useParams} from 'react-router-dom';
import Header from '../Header/Header';
import EditorMessage from '../Editor/EditorMessage';

function ListaRespuestas () {

    const params = useParams();
    const messageId = params.id;
    const [messagesData, setmessagesData] = useState([]);
    const [responsesData, setresponsesData] = useState([]);
    
    useEffect(() => {
        let filters = {
            id: messageId
        }
        const messages = async () => {
            const response = await getMessages(filters);
            setmessagesData(response.filter((value) => {return value.ID ==  messageId}));
        }
        const responses = async () => {
            const response = await getResponses(messageId);
            if (response.length > 0) {
                setresponsesData(JSON.parse(response[0].RESPONSES));

            }
        }
        messages();
        responses();
    }, []);


    return (
        
        <div className="foro">
            <div className='bg-static'></div>
            <Header/>
            <div className='respuestas'>
                <div class="title">
                    <h2>Crear Conversación</h2>
                </div>
                <p className="subtitle">Respuestas</p>
                <div class="listado">
                    {responsesData != null && (
                        <div className='respuesta'>
                            {responsesData.map((value,key) => {
                                return  <div dangerouslySetInnerHTML={{__html: value.text}} /> 
                            })}
                        </div>
                    )}
                </div>
                <br></br>
                <p className="subtitle">Responder</p>
                <EditorMessage subjectId={messageId} TIPO="message" />
            </div>
        </div>
    )

}

export default ListaRespuestas;
