import { number } from 'prop-types'
import { useState } from 'react'

const AddTraining = ({ onAdd }) => {

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
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingSMR_1(true)
            setUploadedSMR_1(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/SMR_1/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setSMR_1_cert(file.secure_url)
            setLoadingSMR_1(false)
            setUploadedSMR_1(true)
  }

  const uploadSMR_2 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_2(true)
        setUploadedSMR_2(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_2/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_2_cert(file.secure_url)
        setLoadingSMR_2(false)
        setUploadedSMR_2(true)
}

const uploadSMR_3 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_3(true)
        setUploadedSMR_3(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_3/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_3_cert(file.secure_url)
        setLoadingSMR_3(false)
        setUploadedSMR_3(true)
}

const uploadSMR_4 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_4(true)
        setUploadedSMR_4(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_4/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_4_cert(file.secure_url)
        setLoadingSMR_4(false)
        setUploadedSMR_4(true)
}

const uploadSMR_5 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_5(true)
        setUploadedSMR_5(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_5/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_5_cert(file.secure_url)
        setLoadingSMR_5(false)
        setUploadedSMR_5(true)
}

    const uploadCISA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCISA(true)
            setUploadedCISA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CISA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCISA_cert(file.secure_url)
            setLoadingCISA(false)
            setUploadedCISA(true)
    }

    const uploadCEH = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCEH(true)
            setUploadedCEH(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CEH/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCEH_cert(file.secure_url)
            setLoadingCEH(false)
            setUploadedCEH(true)
    }

    const uploadISO27001 = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingISO27001(true)
            setUploadedISO27001(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/ISO27001/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setISO27001_cert(file.secure_url)
            setLoadingISO27001(false)
            setUploadedISO27001(true)
    }

    const uploadCHFI = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCHFI(true)
            setUploadedCHFI(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CHFI/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCHFI_cert(file.secure_url)
            setLoadingCHFI(false)
            setUploadedCHFI(true)
    }

    const uploadQIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingQIA(true)
            setUploadedQIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/QIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setQIA_cert(file.secure_url)
            setLoadingQIA(false)
            setUploadedQIA(true)
    }

    const uploadCIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCIA(true)
            setUploadedCIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCIA_cert(file.secure_url)
            setLoadingCIA(false)
            setUploadedCIA(true)
    }

    const uploadCA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCA(true)
            setUploadedCA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCA_cert(file.secure_url)
            setLoadingCA(false)
            setUploadedCA(true)
    }

    const uploadCBIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCBIA(true)
            setUploadedCBIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CBIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCBIA_cert(file.secure_url)
            setLoadingCBIA(false)
            setUploadedCBIA(true)
    }

    const uploadCPA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCPA(true)
            setUploadedCPA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CPA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCPA_cert(file.secure_url)
            setLoadingCPA(false)
            setUploadedCPA(true)
    }

    const uploadOther = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingOther(true)
            setUploadedOther(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/Other/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setOther_cert(file.secure_url)
            setLoadingOther(false)
            setUploadedOther(true)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()

        
    const uploadSMR_1 = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingSMR_1(true)
            setUploadedSMR_1(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/SMR_1/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setSMR_1_cert(file.secure_url)
            setLoadingSMR_1(false)
            setUploadedSMR_1(true)
  }

  const uploadSMR_2 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_2(true)
        setUploadedSMR_2(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_2/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_2_cert(file.secure_url)
        setLoadingSMR_2(false)
        setUploadedSMR_2(true)
}

const uploadSMR_3 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_3(true)
        setUploadedSMR_3(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_3/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_3_cert(file.secure_url)
        setLoadingSMR_3(false)
        setUploadedSMR_3(true)
}

const uploadSMR_4 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_4(true)
        setUploadedSMR_4(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_4/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_4_cert(file.secure_url)
        setLoadingSMR_4(false)
        setUploadedSMR_4(true)
}

const uploadSMR_5 = async e => {
    const files = e.target.files[0]
        const data = new FormData()
        data.append('cert_file', files)
        setLoadingSMR_5(true)
        setUploadedSMR_5(false)
        const res = await fetch(
            'http://156.67.217.92/api/admin/employee_data/cert/SMR_5/' + NIK,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setSMR_5_cert(file.secure_url)
        setLoadingSMR_5(false)
        setUploadedSMR_5(true)
}

    const uploadCISA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCISA(true)
            setUploadedCISA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CISA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCISA_cert(file.secure_url)
            setLoadingCISA(false)
            setUploadedCISA(true)
    }

    const uploadCEH = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCEH(true)
            setUploadedCEH(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CEH/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCEH_cert(file.secure_url)
            setLoadingCEH(false)
            setUploadedCEH(true)
    }

    const uploadISO27001 = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingISO27001(true)
            setUploadedISO27001(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/ISO27001/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setISO27001_cert(file.secure_url)
            setLoadingISO27001(false)
            setUploadedISO27001(true)
    }

    const uploadCHFI = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCHFI(true)
            setUploadedCHFI(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CHFI/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCHFI_cert(file.secure_url)
            setLoadingCHFI(false)
            setUploadedCHFI(true)
    }

    const uploadQIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingQIA(true)
            setUploadedQIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/QIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setQIA_cert(file.secure_url)
            setLoadingQIA(false)
            setUploadedQIA(true)
    }

    const uploadCIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCIA(true)
            setUploadedCIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCIA_cert(file.secure_url)
            setLoadingCIA(false)
            setUploadedCIA(true)
    }

    const uploadCA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCA(true)
            setUploadedCA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCA_cert(file.secure_url)
            setLoadingCA(false)
            setUploadedCA(true)
    }

    const uploadCBIA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCBIA(true)
            setUploadedCBIA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CBIA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCBIA_cert(file.secure_url)
            setLoadingCBIA(false)
            setUploadedCBIA(true)
    }

    const uploadCPA = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingCPA(true)
            setUploadedCPA(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/CPA/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setCPA_cert(file.secure_url)
            setLoadingCPA(false)
            setUploadedCPA(true)
    }

    const uploadOther = async e => {
        const files = e.target.files[0]
            const data = new FormData()
            data.append('cert_file', files)
            setLoadingOther(true)
            setUploadedOther(false)
            const res = await fetch(
                'http://156.67.217.92/api/admin/employee_data/cert/Other/' + NIK,
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            setOther_cert(file.secure_url)
            setLoadingOther(false)
            setUploadedOther(true)
    }

    }

    return (
        <div>

            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>NIK</label>
                    <input type='number' placeholder='NIK' 
                    value={NIK} onChange={(e) => setNIK(e.target.value)}
                    />
                </div> 

                <input type='submit' value='Save' 
                className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
            </form>

        <form>

            <div className='form-control'>
                <label>CISA</label>
                <input type='file'
                onChange={uploadCISA}/>
                
            </div>

            {loadingCISA && <h3>Downloading...</h3>}
            {uploadedCISA && <div className="upload-alert-container"><h3><b>CISA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CEH</label>
                <input type='file'
                onChange={uploadCEH}/>
                
            </div>

            {loadingCEH && <h3>Downloading...</h3>}
            {uploadedCEH && <div className="upload-alert-container"><h3><b>CEH File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>ISO2700127001</label>
                <input type='file'
                onChange={uploadISO27001}/>
                
            </div>

            {loadingISO27001 && <h3>Downloading...</h3>}
            {uploadedISO27001 && <div className="upload-alert-container"><h3><b>ISO27001 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CHFI</label>
                <input type='file'
                onChange={uploadCHFI}/>
                
            </div>

            {loadingCHFI && <h3>Downloading...</h3>}
            {uploadedCHFI && <div className="upload-alert-container"><h3><b>CHFI File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>QIA</label>
                <input type='file'
                onChange={uploadQIA}/>
                
            </div>

            {loadingQIA && <h3>Downloading...</h3>}
            {uploadedQIA && <div className="upload-alert-container"><h3><b>QIA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CIA</label>
                <input type='file'
                onChange={uploadCIA}/>
                
            </div>

            {loadingCIA && <h3>Downloading...</h3>}
            {uploadedCIA && <div className="upload-alert-container"><h3><b>CIA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CA</label>
                <input type='file'
                onChange={uploadCA}/>
                
            </div>

            {loadingCA && <h3>Downloading...</h3>}
            {uploadedCA && <div className="upload-alert-container"><h3><b>CA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CBIA</label>
                <input type='file'
                onChange={uploadCBIA}/>
                
            </div>

            {loadingCBIA && <h3>Downloading...</h3>}
            {uploadedCBIA && <div className="upload-alert-container"><h3><b>CBIA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>CPA</label>
                <input type='file'
                onChange={uploadCPA}/>
                
            </div>

            {loadingCPA && <h3>Downloading...</h3>}
            {uploadedCPA && <div className="upload-alert-container"><h3><b>CPA File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 1 Certificate</label>
                <input type='file'
                onChange={uploadSMR_1}/>
                
            </div> 

            {loadingSMR_1 && <h3>Downloading...</h3>}
            {uploadedSMR_1 && <div className="upload-alert-container"><h3><b>SMR level 1 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 2 Certificate</label>
                <input type='file'
                onChange={uploadSMR_2}/>
                
            </div> 

            {loadingSMR_2 && <h3>Downloading...</h3>}
            {uploadedSMR_2 && <div className="upload-alert-container"><h3><b>SMR level 2 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 3 Certificate</label>
                <input type='file'
                onChange={uploadSMR_3}/>
                
            </div> 

            {loadingSMR_3 && <h3>Downloading...</h3>}
            {uploadedSMR_3 && <div className="upload-alert-container"><h3><b>SMR level 3 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 4 Certificate</label>
                <input type='file'
                onChange={uploadSMR_4}/>
                
            </div> 

            {loadingSMR_4 && <h3>Downloading...</h3>}
            {uploadedSMR_4 && <div className="upload-alert-container"><h3><b>SMR level 4 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>SMR level 5 Certificate</label>
                <input type='file'
                onChange={uploadSMR_5}/>
                
            </div> 

            {loadingSMR_5 && <h3>Downloading...</h3>}
            {uploadedSMR_5 && <div className="upload-alert-container"><h3><b>SMR level 5 File Uploaded.</b></h3></div>}

            {loadingSMR_5 && <h3>Downloading...</h3>}
            {uploadedSMR_5 && <div className="upload-alert-container"><h3><b>SMR level 5 File Uploaded.</b></h3></div>}

            <div className='form-control'>
                <label>Others</label>
                <input type='file'
                onChange={uploadOther}/>
                
            </div>

            {loadingOther && <h3>Downloading...</h3>}
            {uploadedOther && <div className="upload-alert-container"><h3><b>Certificate File Uploaded.</b></h3></div>}
        </form>
        </div>
    )
}

export default AddTraining
