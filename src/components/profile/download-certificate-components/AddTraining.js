import { number } from 'prop-types'
import { useState } from 'react'
import UrlImageDownloader from 'react-url-image-downloader'

//user data
import useToken from '../../../useToken'
import jwt from 'jwt-decode'


const AddTraining = ({ onAdd }) => {

  //user data
  const { token, setToken } = useToken()
  const jwt = require('jsonwebtoken')
  const decode = jwt.decode(token)

    const [SMR_1_cert, setSMR_1_cert] = useState('')
    const [SMR_2_cert, setSMR_2_cert] = useState('')
    const [SMR_3_cert, setSMR_3_cert] = useState('')
    const [SMR_4_cert, setSMR_4_cert] = useState('')
    const [SMR_5_cert, setSMR_5_cert] = useState('')
    const [CISA_cert, setCISA_cert] = useState('')
    const [CEH_cert, setCEH_cert] = useState('')
    const [ISO27001_cert, setISO27001_cert] = useState('')
    const [CHFI_cert, setCHFI_cert] = useState('')
    const [QIA_cert, setQIA_cert] = useState('')
    const [CIA_cert, setCIA_cert] = useState('')
    const [CA_cert, setCA_cert] = useState('')
    const [CBIA_cert, setCBIA_cert] = useState('')
    const [CPA_cert, setCPA_cert] = useState('')
    const [Other_cert, setOther_cert] = useState('')

    const [NIK,setNIK] = useState('999')

    const [loadingSMR_1, setLoadingSMR_1] = useState(false)
    const [uploadedSMR_1, setUploadedSMR_1] = useState(false)
    
    const [loadingSMR_2, setLoadingSMR_2] = useState(false)
    const [uploadedSMR_2, setUploadedSMR_2] = useState(false)
    
    const [loadingSMR_3, setLoadingSMR_3] = useState(false)
    const [uploadedSMR_3, setUploadedSMR_3] = useState(false)
    
    const [loadingSMR_4, setLoadingSMR_4] = useState(false)
    const [uploadedSMR_4, setUploadedSMR_4] = useState(false)
    
    const [loadingSMR_5, setLoadingSMR_5] = useState(false)
    const [uploadedSMR_5, setUploadedSMR_5] = useState(false)
    

    const [loadingCISA, setLoadingCISA] = useState(false)
    const [uploadedCISA, setUploadedCISA] = useState(false)
    
    const [loadingCEH, setLoadingCEH] = useState(false)
    const [uploadedCEH, setUploadedCEH] = useState(false)
    
    const [loadingISO27001, setLoadingISO27001] = useState(false)
    const [uploadedISO27001, setUploadedISO27001] = useState(false)
    
    const [loadingCHFI, setLoadingCHFI] = useState(false)
    const [uploadedCHFI, setUploadedCHFI] = useState(false)
    
    const [loadingQIA, setLoadingQIA] = useState(false)
    const [uploadedQIA, setUploadedQIA] = useState(false)
    
    const [loadingCIA, setLoadingCIA] = useState(false)
    const [uploadedCIA, setUploadedCIA] = useState(false)
    
    const [loadingCA, setLoadingCA] = useState(false)
    const [uploadedCA, setUploadedCA] = useState(false)
    
    const [loadingCBIA, setLoadingCBIA] = useState(false)
    const [uploadedCBIA, setUploadedCBIA] = useState(false)
    
    const [loadingCPA, setLoadingCPA] = useState(false)
    const [uploadedCPA, setUploadedCPA] = useState(false)

    const [loadingOther, setLoadingOther] = useState(false)
    const [uploadedOther, setUploadedOther] = useState(false)
    

    const uploadSMR_1 = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/SMR_1/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

  const uploadSMR_2 = async e => {
    e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/SMR_2/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

const uploadSMR_3 = async e => {
    e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/SMR_3/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

const uploadSMR_4 = async e => {
    e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/SMR_4/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

const uploadSMR_5 = async e => {
    e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/SMR_5/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCISA = async e => {
        e.preventDefault()
        setLoadingCISA(true)
        setUploadedCISA(false)
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CISA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })
          setLoadingCISA(false)
        setUploadedCISA(true)
        }

    const uploadCEH = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CEH/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadISO27001 = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/ISO27001/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCHFI = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CHFI/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadQIA = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/QIA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCIA = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CIA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCA = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCBIA = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CBIA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    const uploadCPA = async e => {
        e.preventDefault()
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = 'http://156.67.217.92/api/admin/employee/download/cert/cname/CPA/nik/' + decode.nik
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          })}

    return (
        <div>
        <form>

            <div className='form-control'>
                <label>CISA</label>
                <button onClick={uploadCISA}>download</button>
                
            </div>

            {loadingCISA && <h3>Downloading...</h3>}
            {uploadedCISA && <div className="upload-alert-container"><h3><b>CISA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CEH</label>
                <button onClick={uploadCEH}>download</button>
                
            </div>

            {loadingCEH && <h3>Downloading...</h3>}
            {uploadedCEH && <div className="upload-alert-container"><h3><b>CEH File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>ISO2700127001</label>
                <button onClick={uploadISO27001}>download</button>
                
            </div>

            {loadingISO27001 && <h3>Downloading...</h3>}
            {uploadedISO27001 && <div className="upload-alert-container"><h3><b>ISO27001 File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CHFI</label>
                <button onClick={uploadCHFI}>download</button>
                
            </div>

            {loadingCHFI && <h3>Downloading...</h3>}
            {uploadedCHFI && <div className="upload-alert-container"><h3><b>CHFI File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>QIA</label>
                <button onClick={uploadQIA}>download</button>
                
            </div>

            {loadingQIA && <h3>Downloading...</h3>}
            {uploadedQIA && <div className="upload-alert-container"><h3><b>QIA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CIA</label>
                <button onClick={uploadCIA}>download</button>
                
            </div>

            {loadingCIA && <h3>Downloading...</h3>}
            {uploadedCIA && <div className="upload-alert-container"><h3><b>CIA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CA</label>
                <button onClick={uploadCA}>download</button>
                
            </div>

            {loadingCA && <h3>Downloading...</h3>}
            {uploadedCA && <div className="upload-alert-container"><h3><b>CA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CBIA</label>
                <button onClick={uploadCBIA}>download</button>
                
            </div>

            {loadingCBIA && <h3>Downloading...</h3>}
            {uploadedCBIA && <div className="upload-alert-container"><h3><b>CBIA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>CPA</label>
                <button onClick={uploadCPA}>download</button>
                
            </div>

            {loadingCPA && <h3>Downloading...</h3>}
            {uploadedCPA && <div className="upload-alert-container"><h3><b>CPA File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 1 Certificate</label>
                <button onClick={uploadSMR_1}>download</button>
                
            </div> 

            {loadingSMR_1 && <h3>Downloading...</h3>}
            {uploadedSMR_1 && <div className="upload-alert-container"><h3><b>SMR level 1 File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 2 Certificate</label>
                <button onClick={uploadSMR_2}>download</button>
                
            </div> 

            {loadingSMR_2 && <h3>Downloading...</h3>}
            {uploadedSMR_2 && <div className="upload-alert-container"><h3><b>SMR level 2 File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 3 Certificate</label>
                <button onClick={uploadSMR_3}>download</button>
                
            </div> 

            {loadingSMR_3 && <h3>Downloading...</h3>}
            {uploadedSMR_3 && <div className="upload-alert-container"><h3><b>SMR level 3 File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 4 Certificate</label>
                <button onClick={uploadSMR_4}>download</button>
                
            </div> 

            {loadingSMR_4 && <h3>Downloading...</h3>}
            {uploadedSMR_4 && <div className="upload-alert-container"><h3><b>SMR level 4 File Downloaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 5 Certificate</label>
                <button onClick={uploadSMR_5}>download</button>
                
            </div> 

            {loadingSMR_5 && <h3>Downloading...</h3>}
            {uploadedSMR_5 && <div className="upload-alert-container"><h3><b>SMR level 5 File Downloaded.</b></h3></div>}

            {loadingSMR_5 && <h3>Downloading...</h3>}
            {uploadedSMR_5 && <div className="upload-alert-container"><h3><b>SMR level 5 File Downloaded.</b></h3></div>}

        </form>
        </div>
    )
}

export default AddTraining
