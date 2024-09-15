import React from "react";
// import "./QrStyles.css";
import Footer from "../../components/Footer";
import Profile_Header from "../../components/Profile_Header";
function QRcode() {
  return (
    <div className="qrcode-conatiner">
      <div className="qrcode-header">
        <Profile_Header/>
      </div>
      <div className="qrcode-main-area">
        
      </div>
      <div className="qrcode-footer">
        <Footer />
      </div>
    </div>
  );
}

export default QRcode;
