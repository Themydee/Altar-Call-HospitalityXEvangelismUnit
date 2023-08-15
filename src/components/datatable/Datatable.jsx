import React from 'react'
import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { columns } from '../../pages/datatablesource';
import { rows } from '../../pages/datatablesource';

const Datatable = () => {

  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 100,
      renderCell:(params)=>{
        return (
          <div className='cellAction'>
            <div className='viewButton'>Edit</div>
            <div className='deleteButton'>Delete</div>
          </div>
        )
    }
    },
  ]
  return (
    <div className='datatable'>
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