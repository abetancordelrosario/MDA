import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

const Editor = ({}) => {
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

  return (
    <JoditEditor
      ref={editor}
      config={config}
    />
  );
};

export default Editor;