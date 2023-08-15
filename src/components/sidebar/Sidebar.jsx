import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group';
import ChurchIcon from '@mui/icons-material/Church';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'><span className="logo">New Converts Dashboard</span></div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>

          <p className="title">Converts</p>
          <li>
            <ChurchIcon className='icon'/>
            <span>Total Converts</span>
          </li>
          {/* <li>
            <EscalatorWarningIcon className='icon'/>
            <span>New Converts</span>
          </li>
          <li>
            <DirectionsRunIcon className='icon'/>
            <span>Rededication</span>
          </li> */}

          <p className="title">Useful</p>
          <li>
            <WaterfallChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <AnnouncementIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <li>
            <TuneIcon className='icon'/>
            <span>Settings</span>
          </li>

          <p className="title">User</p>
          <li>
            <GroupIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Log out</span>
          </li>
        </ul>
      </div>

      <div className='bottom'>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar