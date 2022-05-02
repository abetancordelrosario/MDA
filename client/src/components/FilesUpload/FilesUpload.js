import React from 'react';
import './FilesUpload.css';
import {Link} from 'react-router-dom';
import { uploadFile } from '../../services/fileService';


function FilesUpload ({subject, userId}) {
    const handleSubmit = async (event) => {
        uploadFile(event.target.elements[0].files, subject, userId, sessionStorage.userPoints);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='fileInput' type="file"></input>
            <button type="submit">Subir: </button>
        </form>
    )
}

export default FilesUpload;