import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import "./Scan.css";
import Profile_Header from "../../components/Profile_Header";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scan() {
  const [scanresult, setscanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        height: 250,
        width: 250,
      },
      fps: 5,
    });
    scanner.render(onSuccess, onFailure);

    function onSuccess(result) {
      scanner.clear();
      setscanResult(result);
      
    }

    function onFailure(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="qrscan-container">
      <div className="qrscan-header">
        <Profile_Header />
      </div>
      <div className="qrscan-main-area">
        {scanresult ? (
          <div className="qr-scan-result">
            Success : <a href={scanresult}>{scanresult}</a>{" "}
          </div>
        ) : (
          <div id="reader"></div>

        )}
      </div>
      <div className="qrscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Scan;
