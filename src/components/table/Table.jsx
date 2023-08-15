import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss';


const List = () => {
    const rows = [
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
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow>
                    <TableCell>{row.id}</TableCell>
                    <TableCell className="tableData" component="th" scope="row">{row.name}</TableCell>
                    <TableCell className="tableData" align="center">{row.dept}</TableCell>
                    <TableCell className="tableData" align="center">{row.level}</TableCell>
                    <TableCell className="tableData" align="center">{row.reg}</TableCell>
                    <TableCell className="tableData" align="center">{row.webmail}</TableCell>
                    <TableCell className="tableData" align="center">{row.status}</TableCell>
                    <TableCell className="tableData" align="center">{row.baptized}</TableCell>
                    <TableCell className="tableData" align="center">{row.spirit}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default List