import React from "react";
import "./QRcode.css";
import Navbar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Qr_Mission from "../../assets/qr-mission.png";
function QRcode() {
  return (
    <div className="qrcode-conatiner">
      <div className="qrcode-header">
        <Navbar />
      </div>
      <div className="qrcode-main-area">
        <h3>Apology for Disappointment </h3>
        <h4> We are on the way to meet your expectation !</h4>
        <img src={Qr_Mission} alt="On the Mission" />
        <h4>If you are interested. Please Connect with Us</h4>
        <p>
          Connect on{" "}
          <button className="btn">
            <a href="https://www.linkedin.com/company/nextgen-ehr">Linkedin</a>
          </button>
        </p>
        <p> Please Leave Email on: <email>grv.shakya0563@gmail.com</email></p>
      </div>
      <div className="qrcode-footer">
        <Footer />
      </div>
    </div>
  );
}

export default QRcode;
