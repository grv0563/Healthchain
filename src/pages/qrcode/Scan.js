import React from "react";
import Footer from "../../components/Footer";
import './Scan.css'
import Profile_Header from "../../components/Profile_Header";

function Scan() {
  return (
    <div className="qrscan-container">
      <div className="qrscan-header">
        <Profile_Header/>
      </div>
      <div className="qrscan-main-area">
      
        
      </div>
      <div className="qrscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Scan;
