import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import "./AfterScan.css";
function AfterScan() {
  const handleprescription = () => {
    //write code to implement the prescription process
    alert("prescription works");
  };
  const handleSummarize = () => {
    //write code to summirize the patient history with gemini AI api
    alert("Health History summrary looks nice");
  };
  const handle_drug_adding_in_prescription =()=>{
    alert("Drug added in Precription")
  }
  return (
    <div className="afterscan-container">
      <div className="afterscan-header">
        <NavigationBar />
      </div>
      <div className="afterscan-main">
        <h1>Patient History</h1>
        <button onClick={handleSummarize}>Summarize</button>
        <button onClick={handleprescription}>Prescribe</button>
        <div className="afterscan-prescribe-drug">
          <input placeholder="Type drug name" />
          <button onClick={handle_drug_adding_in_prescription}><span>&#43;</span></button>
        </div>
      </div>
      <div className="aterscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AfterScan;
