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
            'Division (Project)',
            'Audit Project',
            'Client Name',
            'Unit / Jabatan',
            'TL',
            'CSF Date',
            'ATP 1',
            'ATP 2',
            'ATP 3',
            'ATP 4',
            'ATP 5',
            'ATP 6',
            'ATP Overall',
            'AC 1',
            'AC 2',
            'AC 3',
            'AC 4',
            'AC 5',
            'AC 6',
            'AC Overall',
            'PAW 1',
            'PAW 2',
            'PAW 3',
            'PAW OVerall',
            'Overall',
            'division (involvement)'
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
