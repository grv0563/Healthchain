import React from 'react';
import "./InsurnaceDash.css"
import Profile_Header from '../../../components/Profile_Header';
import Footer from '../../../components/Footer';

function InsurnaceDash() {
  return (
    <div className='isurnace-coantiner'>
        <div className='isnurance-header'>
        <Profile_Header/>
        </div>
        <div className='insurnace-mainarea'>
        <h1>Insurnace company Dashboard</h1>
        </div>
        <div className='insurnace-footer'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default InsurnaceDash
