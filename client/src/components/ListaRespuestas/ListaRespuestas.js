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
            <Header/>
            <div class="title">
                <h2>Conversaciones</h2>
            </div>
            <div class="messageTitle">
                <br></br>
                <h3>{messagesData.map((value,key) => {
                        return  <p>{value.TITLE}</p>
                    })}</h3>
            </div>
            <div class="message">
                {messagesData.map((value,key) => {
                    return <div dangerouslySetInnerHTML={{__html: value.MESSAGE}} />             
                })}
            </div>
            <div class="respuestas">
                <EditorMessage subjectId={messageId} TIPO="message" />
                <p id="subtitle">Respuestas</p>
                <div class="lista-respuestas">
                    {responsesData != null && (
                        <div>
                            {responsesData.map((value,key) => {
                                return  <p>{value.text}</p> 
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default ListaRespuestas;
