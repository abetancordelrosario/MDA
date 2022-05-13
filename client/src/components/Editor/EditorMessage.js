import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import {insertMessage} from '../../services/messageService';
import {insertResponse} from '../../services/responseService';



function Editor ({dataPrueba, subjectId,TIPO}) {
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
    event.preventDefault();
    const var1 = event.target.elements.mensaje.value;
    const var2 = var1.replace(/<p>/g,'');
    const var3 = var2.slice(0,-4);
    if(TIPO === "conver" ){
      console.log("conversacion");
      let messageInfo = {
        subjectid: subjectId,
        userid: sessionStorage.userId,
        title: event.target.elements.titulo.value,
        message: var3
      }
      insertMessage(messageInfo);
    }else{
      console.log("message");
      let responseInfo = {
        response: var3,
        messageid: subjectId
      }

      insertResponse(responseInfo);
    }  
  }

  return (
    <div>
      {sessionStorage.userId && (
      <form onSubmit={handleSubmit}>
          <label htmlFor="mensaje">Mensaje: </label>
          <JoditEditor ref={editor} config={config} name="mensaje"/>
          <button type="submit">Añadir: </button>
      </form>
    )}
    </div>
  );
};

export default Editor;