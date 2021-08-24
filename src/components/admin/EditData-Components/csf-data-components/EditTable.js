import React from 'react'
import MaterialTable from 'material-table'

const EditTable = () => {

    const data=[
        {
            id : '1',
            division : 'BRDS',
            auditProject : 'Regulatory Reporting',
            clientName : 'Christian Yongardi Tandoro Tjhin',
            unitJabatan : 'Finance Head',
            TL : 'Wenny',
            CSFDate : '15/04/2021',
            atp1 : 4,
            atp2 : 4,
            atp3 : 4,
            atp4 : 4,
            atp5 : 4,
            atp6 : 4,
            atpOverall : 4,
            ac1 : 4,
            ac2 : 4,
            ac3 : 4,
            ac4 : 4,
            ac5 : 4,
            ac6 : 4,
            acOverall : 4,
            paw1 : 4,
            paw2 : 4,
            paw3 : 4,
            pawOverall : 4,
            overall : 4,
            CSFBy : 'Project'
        },
        {
            id : '2',
            division : 'BRDS',
            auditProject : 'Regulatory Reporting',
            clientName : 'Christian Yongardi Tandoro Tjhin',
            unitJabatan : 'Finance Head',
            TL : 'Wenny',
            CSFDate : '15/04/2021',
            atp1 : 4,
            atp2 : 4,
            atp3 : 4,
            atp4 : 4,
            atp5 : 4,
            atp6 : 4,
            atpOverall : 4,
            ac1 : 4,
            ac2 : 4,
            ac3 : 4,
            ac4 : 4,
            ac5 : 4,
            ac6 : 4,
            acOverall : 4,
            paw1 : 4,
            paw2 : 4,
            paw3 : 4,
            pawOverall : 4,
            overall : 4,
            CSFBy : 'Divison'
        },
        {
            id : '3',
            division : 'WBGM',
            auditProject : 'Regulatory Reporting',
            clientName : 'Christian Yongardi Tandoro Tjhin',
            unitJabatan : 'Finance Head',
            TL : 'Wenny',
            CSFDate : '15/04/2021',
            atp1 : 4,
            atp2 : 4,
            atp3 : 4,
            atp4 : 4,
            atp5 : 4,
            atp6 : 4,
            atpOverall : 4,
            ac1 : 4,
            ac2 : 4,
            ac3 : 4,
            ac4 : 4,
            ac5 : 4,
            ac6 : 4,
            acOverall : 4,
            paw1 : 4,
            paw2 : 4,
            paw3 : 4,
            pawOverall : 4,
            overall : 4,
            CSFBy : 'Project'
        }
    ]

    const columns=[
        {title:'No.', field:'id'},
        {title:'Divison', field:'division'},
        {title:'Audit Project', field:'auditProject'},
        {title:'Client Name', field:'clientName'},
        {title:'Unit / Jabatan', field:'unitJabatan'},
        {title:'TL', field:'TL'},
        {title:'CSF Date', field:'CSFDate'},
        {title:'ATP 1', field:'atp1'},
        {title:'ATP 2', field:'atp2'},
        {title:'ATP 3', field:'atp3'},
        {title:'ATP 4', field:'atp4'},
        {title:'ATP 5', field:'atp5'},
        {title:'ATP 6', field:'atp6'},
        {title:'ATP Overall', field:'atpOverall'},
        {title:'AC 1', field:'ac1'},
        {title:'AC 2', field:'ac2'},
        {title:'AC 3', field:'ac3'},
        {title:'AC 4', field:'ac4'},
        {title:'AC 5', field:'ac5'},
        {title:'AC 6', field:'ac6'},
        {title:'AC Overall', field:'acOverall'},
        {title:'PAW 1', field:'paw1'},
        {title:'PAW 2', field:'paw2'},
        {title:'PAW 3', field:'paw3'},
        {title:'PAW Overall', field:'pawOverall'},
        {title:'Overall', field:'overall'},
        {title:'CSF By:', field:'CSFBy'}
    ]

    return (
        <div>
            <MaterialTable
                title='QA Information'
                data={data}
                columns={columns}
                options={{
                    exportButton:true,
                }}
            />
        </div>
    )
}

export default EditTable
