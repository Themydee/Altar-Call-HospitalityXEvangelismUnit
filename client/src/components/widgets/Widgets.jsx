import React from 'react'
import "./widgets.scss" 
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ChurchIcon from '@mui/icons-material/Church';

const Widgets = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case 'totalconverts':
            data = {
                title: 'Total Converts',
                isCount: true,
                link: 'View all',
                icon: (
                    <GroupIcon  className='icon'/>
                )
            };
        break;
        case 'newconverts':
            data = {
                title: 'New Converts',
                isCount: true,
                link: 'View all',
                icon: (
                    <EscalatorWarningIcon  className='icon'/>
                )
            };
        break;
        case 'rededication':
            data = {
                title: 'Rededication',
                isCount: true,
                link: 'View all',
                icon: (
                    <DirectionsRunIcon  className='icon'/>
                )
            };
        break;


    }
  return (
    <div className='widget'>

        <div className="left">
            <span className="title">
                {data.title}
            </span>

            <span className="counter">
                {data.isCount && ""}{amount}
            </span>

            <span className="link">
                {data.link}
            </span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpTwoToneIcon />
                {diff}%
            </div>
            {data.icon}

        </div>
    </div>
  )
}

export default Widgets