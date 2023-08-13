import React from 'react'
import './featured.scss'
import SchoolIcon from '@mui/icons-material/School';
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Session: 2023/2024</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredImage">
          <SchoolIcon className='icon'/>
        </div>
        <p className="title">Semester: Alpha</p>

      </div>

    </div>
  )
}

export default Featured