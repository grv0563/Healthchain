import React from 'react'
import "./TestCenterDash.css"
import Footer from '../../../components/Footer';
import Profile_Header from '../../../components/Profile_Header';
function TestCenterDash() {
  return (
    <div className='testingcenter-container'>
    <div className='testingcenter-header'>
        <Profile_Header/>
    </div>
    <div className='testingcenter-mainarea'>
    <h1>Testing LAB Dashboard</h1>
    </div>
    <div className='testingcenter-footer'>
        <Footer/>
    </div>
  
</div>
  )
}

export default TestCenterDash;
