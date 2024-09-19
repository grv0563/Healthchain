import React from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer";
import Profile_Header from "../../components/Profile_Header";
import Accordion from "react-bootstrap/Accordion";
import SearchBar from "./componenets/SearchBar";
import Notification from "./componenets/Notification";
import DashboardPagination from "./componenets/DashboardPagination";
import new_message_icon from "../../assets/new-message-icon.png"

let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};
const handleNotification=()=>{
  alert("No Recent Notification ")
}


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Profile_Header />
      </div>
      <div className="dashboard-mainarea">
        <h1>Doctor's EHR dashboard</h1>
        <p>
          Please click on below scan button to view the Patient's complete
          Health Records
        </p>
        <button className="btn"><a href="/qrscan">scan QR</a></button>
        <p>
          Scan this QR to view the Provider's(e.g Docter) information such as
          speciality
        </p>
        <button className="btn"><a href="/qrcode">show QR</a></button>
        <hr></hr>
        <h1>Administer Patients</h1>
        <hr></hr>

        <div className="patient-adminitration-dashboard">
          <p style={{textAlign:"left"}}>Search Patient Name</p>
          <div className="patient-adminitration-navigationbar">
            <div className="search-bar">
            <SearchBar />
            </div>
            <div className="notification-bar">
            {/* <button onClick={handleNotification}><img src={bell_Icon }/></button> */}
            <Notification/>
            </div>
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Patient 2 - Most Rcent <img style={{marginLeft:"10px", marginTop:"0px", height:"20px", width:"20px"}} src={new_message_icon}/></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <h4>Medical_tests</h4>
                  <li>{patientHealthRecords.medical_tests[0]}</li>
                  <li>{patientHealthRecords.medical_tests[1]}</li>
                  <h4>X_ray_Reports</h4>
                  <li>{patientHealthRecords.x_rays[0]}</li>
                  <li>{patientHealthRecords.x_rays[1]}</li>
                  <h4>MRI_scans</h4>
                  <li>{patientHealthRecords.mri_scans[0]}</li>
                  <li>{patientHealthRecords.mri_scans[1]}</li>
                  <h4>Prescriptions</h4>
                  <li>{patientHealthRecords.prescriptions[0]}</li>
                  <li>{patientHealthRecords.prescriptions[1]}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>patient 1</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <h4>Medical_tests</h4>
                  <li>{patientHealthRecords.medical_tests[0]}</li>
                  <li>{patientHealthRecords.medical_tests[1]}</li>
                  <h4>X_ray_Reports</h4>
                  <li>{patientHealthRecords.x_rays[0]}</li>
                  <li>{patientHealthRecords.x_rays[1]}</li>
                  <h4>MRI_scans</h4>
                  <li>{patientHealthRecords.mri_scans[0]}</li>
                  <li>{patientHealthRecords.mri_scans[1]}</li>
                  <h4>Prescriptions</h4>
                  <li>{patientHealthRecords.prescriptions[0]}</li>
                  <li>{patientHealthRecords.prescriptions[1]}</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            <DashboardPagination/>
          </div>
        </div>
      </div>
      <div className="dashboard-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
