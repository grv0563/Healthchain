import React from 'react'
import "./ProviderDash.css"
import Profile_Header from '../../../components/Profile_Header'
import Footer from '../../../components/Footer'
function ProviderDash() {
  return (
    <div className='provider-container'>
    <div className='provider-header'>
    <Profile_Header/>
    </div>
    <div className='provider-mainarea'>
    provider-mainarea
    </div>
    <div className='provider-footer'>
      <Footer/>
    </div>
  
</div>
  )
}

export default ProviderDash
