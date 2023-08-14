import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        { 
            id: 1, 
            name: 'Akanbi-Bello Temidayo',
            dept: 'Agricultural Economics',
            level: '500',
            regNo: '1801089',
            webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
            spiritualStatus: 'Rededication',
            waterBaptized: 'Yes',
            holyGhostBapism: 'Yes',
            phoneNumber: '07065080140',
        },
        { 
            id: 2, 
            name: 'Akanbi-Bello Temidayo',
            dept: 'Agricultural Economics',
            level: '500',
            regNo: '1801089',
            webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
            spiritualStatus: 'Rededication',
            waterBaptized: 'Yes',
            holyGhostBapism: 'Yes',
            phoneNumber: '07065080140',
        },
        { 
            id: 3, 
            name: 'Akanbi-Bello Temidayo',
            dept: 'Agricultural Economics',
            level: '500',
            regNo: '1801089',
            webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
            spiritualStatus: 'Rededication',
            waterBaptized: 'Yes',
            holyGhostBapism: 'Yes',
            phoneNumber: '07065080140',
        },
        { 
            id: 4, 
            name: 'Akanbi-Bello Temidayo',
            dept: 'Agricultural Economics',
            level: '500',
            regNo: '1801089',
            webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
            spiritualStatus: 'Rededication',
            waterBaptized: 'Yes',
            holyGhostBapism: 'Yes',
            phoneNumber: '07065080140',
        },
        { 
            id: 5, 
            name: 'Akanbi-Bello Temidayo',
            dept: 'Agricultural Economics',
            level: '500',
            regNo: '1801089',
            webmail: 'akanbi-bello.temidayo@lmu.edu.ng',
            spiritualStatus: 'Rededication',
            waterBaptized: 'Yes',
            holyGhostBapism: 'Yes',
            phoneNumber: '07065080140',
        },
        
    ];
    return (
    <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell className="tableCell" >ID</TableCell>
                <TableCell className="tableCell" align="center">NAME</TableCell>
                <TableCell className="tableCell" align="center">DEPARTMENT</TableCell>
                <TableCell className="tableCell" align="center">LEVEL</TableCell>
                <TableCell className="tableCell" align="center">REGNO</TableCell>
                <TableCell className="tableCell" align="center">WEBMAIL</TableCell>
                <TableCell className="tableCell" align="center">SPIRITUAL STATUS</TableCell>
                <TableCell className="tableCell" align="center">WATER BAPTIZED</TableCell>
                <TableCell className="tableCell" align="center">HOLYGHOST BAPTIZED</TableCell>
                <TableCell className="tableCell" align="center">PHONE NUMBER</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow>
                    <TableCell>{row.id}</TableCell>
                    <TableCell className="tableCell" component="th" scope="row">{row.name}</TableCell>
                    <TableCell className="tableCell" align="center">{row.dept}</TableCell>
                    <TableCell className="tableCell" align="center">{row.level}</TableCell>
                    <TableCell className="tableCell" align="center">{row.regNo}</TableCell>
                    <TableCell className="tableCell" align="center">{row.webmail}</TableCell>
                    <TableCell className="tableCell" align="center">{row.spiritualStatus}</TableCell>
                    <TableCell className="tableCell" align="center">{row.waterBaptized}</TableCell>
                    <TableCell className="tableCell" align="center">{row.holyGhostBapism}</TableCell>
                    <TableCell className="tableCell" align="center">{row.phoneNumber}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default List