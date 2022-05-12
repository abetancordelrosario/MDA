import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import {insertMessage} from '../../services/messageService';


function Editor ({dataPrueba, subjectId}) {
  const editor = useRef(null);
  
  const config = {
    readonly: false,
    buttons: [
        'source', '|',
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent',  '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'table',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
    ],
    buttonsXS: [
        'bold',
        'image', '|',
        'brush',
        'paragraph', '|',
        'align', '|',
        'undo', 'redo', '|',
        'eraser',
        'dots'
    ],
  };

  
  function handleSubmit(event) {
    let messageInfo = {
        subjectid: subjectId,
        userid: sessionStorage.userId,
        title: event.target.elements.titulo.value,
        message: event.target.elements.mensaje.value
    }
    insertMessage(messageInfo);
  }

  function handleSubmit(event) {
    let responseInfo = {
        response: event.target.elements.respuesta.value,
        messageid: messageId
    }

    insertResponse(responseInfo);
  }

  return (
    <div>
      {sessionStorage.userId && (
      <form onSubmit={handleSubmit}>
          <label htmlFor="mensaje">Titulo: </label>
          <input id='titulo' name='titulo' type="text"></input>
          <label htmlFor="mensaje">Mensaje: </label>
          <JoditEditor ref={editor} config={config} name="mensaje"/>
          <button type="submit">Añadir: </button>
      </form>
    )}
    </div>
  );
};

export default Editor;