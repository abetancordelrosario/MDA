import React from 'react';
import './FilesUpload.css';
import {Link} from 'react-router-dom';
import { uploadFile } from '../../services/fileService';


function FilesUpload ({subject, userId}) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        uploadFile(event.target.elements[0].files, subject, userId, sessionStorage.userPoints);
    }
    return (
        <form className="form-upload" onSubmit={handleSubmit}>
            <input name='fileInput' type="file"></input>
            <br></br>
            <br></br>
            <button className="submit-button" type="submit">Subir</button>
        </form>
    )
}

export default FilesUpload;