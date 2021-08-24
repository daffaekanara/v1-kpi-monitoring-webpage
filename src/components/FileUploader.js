import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {

    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 204800)
            onFileSelectError({ error: "File size cannot exceed more than 20 MB" });
        else onFileSelectSuccess(file);
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
        </div>
    )
}

export default FileUploader
