import React, { useState } from "react"
import axios from "axios";
import FileUploader from "../../../FileUploader";

const EmployeeCertification2 = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
  
    const submitForm = (e) => {

        e.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", selectedFile);

        axios
        .post('http://156.67.217.92/api/admin/employee_data/cert/SMR/888', formData)
        .then((res) => {
        alert("File Upload success");
        })
        .catch((err) => alert("File Upload Error"))
    };
  
    return (
      <div className="App">
        <form>
  
          <FileUploader
            onFileSelectSuccess={(file) => setSelectedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          />
  
          <button backgroundColor='blue' onClick={submitForm}>Submite</button>
        </form>
      </div>
    )
}

export default EmployeeCertification2
