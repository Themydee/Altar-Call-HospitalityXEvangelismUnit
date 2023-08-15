import React from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Convert</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form action="#">
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder='Enter name here' />
              </div>
              <div className="formInput">
                <label>Department</label>
                <input type="text" placeholder='Enter department here' />
              </div>
              <div className="formInput">
                <label>Level</label>
                <select>
                  <option value="Select">Select Level</option>
                  <option value="Select">100</option>
                  <option value="Select">200</option>
                  <option value="Select">300</option>
                  <option value="Select">400</option>
                  <option value="Select">500</option>
                </select>
              </div>
              <div className="formInput">
                <label>Reg No</label>
                <input type="text" placeholder='Enter Reg No here' />
              </div>
              <div className="formInput">
                <label>Room</label>
                <input type="text" placeholder='Enter Room here' />
              </div>
              <div className="formInput">
                <label>Hall</label>
                <input type="text" placeholder='Enter Hall here' />
              </div>
              <div className="formInput">
                <label>Webmail</label>
                <input type="text" placeholder='Enter webmail here' />
              </div>
              <div className="formInput">
              <label>Status</label>
              <select>
                  <option value="Select">Select Spiritual Status</option>
                  <option value="Select">NewConvert</option>
                  <option value="Select">Redeication</option>
                </select>
              </div>
              <div className="formInput">
              <label>Water Baptized</label>
                <select>
                  <option value="Select">Are you Water Baptized</option>
                  <option value="Select">Yes</option>
                  <option value="Select">No</option>
                </select>
              </div>
              <div className="formInput">
              <label>HolyGhost Baptism</label>
                <select>
                  <option value="Select">Are you Filled with the Holy Ghost</option>
                  <option value="Select">Yes</option>
                  <option value="Select">No</option>
                </select>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New