import React from 'react'
import './PharmaDash.css'
import Profile_Header from '../../../components/Profile_Header'
import Footer from '../../../components/Footer'
function PharmaDash() {
  return (
    <div className='pharma-container'>
    <div className='pharma-header'>
      <Profile_Header/>
    </div>
    <div className='pharma-mainarea'>
    <h1>Pharmacy or Life Science Dashboard</h1>
    </div>
    <div className='pharma-footer'>
        <Footer/>
    </div>
  
</div>
  )
}

export default PharmaDash
