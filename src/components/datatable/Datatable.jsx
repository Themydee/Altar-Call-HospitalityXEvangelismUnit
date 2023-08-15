import React from 'react'
import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { columns } from '../../pages/datatablesource';
import { rows } from '../../pages/datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {

  const [data, setData ] = useState(rows)
  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  };

  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 100,
      renderCell:(params)=>{
        return (
          <div className='cellAction'>
            <Link to='/users/single' style={{textDecoration:'none'}}>
            <div className='viewButton'>View</div>
            </Link>
            
            {/* <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div> */}
          </div>
        )
    }
    },
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New Convert
        <Link to='/users/new' className='link'>
          Add New
        </Link>
      </div>
        <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable