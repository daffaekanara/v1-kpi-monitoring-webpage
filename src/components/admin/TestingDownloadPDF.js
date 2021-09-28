import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { jsPDF } from "jspdf";
import { Button } from 'antd';

const TestingDownloadPDF = () => {

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF({
    orientation: 'l', 
        unit: 'pt', 
        format: [2000, 4000]
  });

  
  const item = ['NIK: 888', '1', '2']

const onDownload = () => {


    doc.autoTable({
        head: [
            [
            'ID',
            'NIK',
            'E-Mail',
            'Role in Website',
            'Staff Name',
            'Division',
            'Stream',
            'Corporate Title',
            'Corporate Grade',
            'Date of Birth',
            'Date Start First Employment',
            'Date Join UOB',
            'Date Join IA Function',
            'As of Now',
            'Age',
            'Gen',
            'Gender',
            'Years of Audit Experience in UOB',
            'Years of Audit Experience outside UOB',
            'Total Audit Experience',
            'Education Level',
            'Educaiton Major',
            'Education Category',
            'RMG Certification',
            'CISA Certification',
            'CEH Certification',
            'ISO27001 Certification',
            'CHFI Certification',
            'IDEA',
            'Qualified Internal Auditor',
            'CBIA Certification',
            'CIA Certification',
            'CPA Certification',
            'CA Certification',
            'Other Certification',
            'Internal Audit Background',
            'External Audit Background',
            'Still in IA'
        ],
        
    ],
        body: [
          [
              '1',
              '1432476863',
              'Ricky@gmail.com',
              'user',
              'Daffa Aulia Ekanara',
              'PPA',
              'IT',
              'Internship',
              '1',
              '02/06/1998',
              '28/07/2021',
              '28/07/2021',
              '28/07/2021',
              '28/09/2021',
              '23',
              'Gen Z',
              'Male',
              '0',
              '0',
              '0',
              'Bachelor',
              'IT',
              'IT',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
            ],
            [
                '1',
                '1432476863',
                'Ricky@gmail.com',
                'user',
                'Daffa Aulia Ekanara',
                'PPA',
                'IT',
                'Internship',
                '1',
                '02/06/1998',
                '28/07/2021',
                '28/07/2021',
                '28/07/2021',
                '28/09/2021',
                '23',
                'Gen Z',
                'Male',
                '0',
                '0',
                '0',
                'Bachelor',
                'IT',
                'IT',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
          // ...
        ],
      })

    doc.save("a4.pdf");
}

    return (
        <div>
            <button onClick={onDownload}>Download PDF</button>
        </div>
    )
}

export default TestingDownloadPDF
