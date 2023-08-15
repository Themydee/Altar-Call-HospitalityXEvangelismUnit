import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type='totalconverts'/>
          <Widgets type='newconverts'/>
          <Widgets type='rededication'/>
          <Widgets type='bfc'/>
        </div>

        <div className="charts">
          <Featured />
          <Chart  aspect={2/1}/>
        </div>

      <div className="footer">
        <Footer />
      </div>
      </div>
    </div>

  )
}

export default Home