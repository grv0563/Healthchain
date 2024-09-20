import React from "react";
import Profile_Header from "../../../components/Profile_Header";
import Footer from "../../../components/Footer";

function ResearchDashboard() {
  return (
    <div className="research-dashboard-container">
      <div className="research-dashboard-container-header">
        <Profile_Header/>
      </div>
      <div className="research-dashboard-container-main">
        <h1>Research Dashboard</h1>
      </div>
      <div className="research-dashboard-container-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default ResearchDashboard;
