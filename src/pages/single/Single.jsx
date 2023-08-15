import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">Converts Info.</div>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Akanbi-Bello Temidayo</h1>

                <div className="detailItem">
                  <span className="itemKey">Webmail:</span>
                  <span className="itemValue">akanbi-bello.temidayo@lmu.edu.ng</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Level:</span>
                  <span className="itemValue">500</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Hall:</span>
                  <span className="itemValue">Isaac</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Room Number:</span>
                  <span className="itemValue">A112</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Rededication</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Water Baptized:</span>
                  <span className="itemValue">Yes</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">HolyGhost Baptism:</span>
                  <span className="itemValue">Yes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2/1}/>
          </div>
        </div>
        <div className="bottom">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single