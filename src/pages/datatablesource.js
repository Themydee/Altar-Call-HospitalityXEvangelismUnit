export const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'level', headerName: 'Level', type: 'number', width: 40},
    { 
        field: 'reg', 
        headerName: 'Reg No', 
        type: 'number', 
        width: 0,
    },
    { 
        field: 'room', 
        headerName: 'Room', 
        type: 'number', 
        width: 60
    },
    { field: 'hall', headerName: 'Hall', type: 'number', width: 60},
    { field: 'dept', headerName: 'Department', width: 80 },
    { field: 'webmail', headerName: 'Webmail', width: 80 },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 100,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    { 
        field: 'baptized',
        headerName: 'Water Baptized', 
        width: 130 ,
        renderCell:(params)=>{
            return (
                <div className={`cellWithBaptized ${params.row.baptized}`}>
                    {params.row.baptized}
                </div>
            )
        }
    },
    { 
        field: 'spirit', 
        headerName: 'Holy Ghost Baptism', 
        width: 130,
        renderCell:(params)=>{
            return (
                <div className={`cellWithSpirit ${params.row.spirit}`}>
                    {params.row.spirit}
                </div>
            )
        }
    },
]


export const rows = [
    { 
        id: 1, 
        name: 'Akanbi-Bello Temidayo',
        dept: 'Agricultural Economics',
        level: '500',
        reg: '1801089',
        room: 'A112',
        hall: 'Isaac',
        webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
        status: 'Rededication',
        baptized: 'No',
        spirit: 'No',
    },
    { 
        id: 2, 
        name: 'Idowu Oluwatoni',
        dept: 'Food Science',
        level: '300',
        reg: '1801123',
        room: 'B112',
        hall: 'Abigail',
        webmail: 'idowu.oluwatoni@lmu.edu.ng',
        status: 'NewConvert',
        baptized: 'Yes',
        spirit: 'No',
    },
    { 
        id: 3, 
        name: 'Jude Success',
        dept: 'Agricultural Extension',
        level: '200',
        reg: '1800098',
        room: 'D204',
        hall: 'Sarah',
        webmail: 'jude.success@lmu.edu.ng',
        status: 'Rededication',
        baptized: 'No',
        spirit: 'Yes',
    },
    { 
        id: 4, 
        name: 'Oluwaniyi Tolu',
        dept: 'E.I.E',
        level: '100',
        reg: '1801198',
        room: 'C406',
        hall: 'Daniel',
        webmail: 'oluwaniyi.toluwanimi@lmu.edu.ng',
        status: 'NewConvert',
        baptized: 'Yes',
        spirit: 'Yes',
    },
    { 
        id: 5, 
        name: 'Favour Martins',
        dept: 'Mass Communication',
        level: '400',
        reg: '1801089',
        room: 'G401',
        hall: 'Sarah',
        webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
        status: 'Rededication',
        baptized: 'Yes',
        spirit: 'No',
    },
]