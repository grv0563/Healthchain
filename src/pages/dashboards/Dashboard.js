import React from 'react';
import "./Dashboard.css"
import Footer from"../../components/Footer"
import Profile_Header from "../../components/Profile_Header"

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
      <Profile_Header/>
      </div>
      <div className='dashboard-mainarea'>

      </div>
      <div className='dashboard-footer'>
      <Footer/>
      </div>
      
    </div>
  )
}

export default Dashboard
