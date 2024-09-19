import React, { useState } from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer";
import Profile_Header from "../../components/Profile_Header";
import Accordion from "react-bootstrap/Accordion";
import SearchBar from "./componenets/SearchBar";
import Notification from "./componenets/Notification";
import DashboardPagination from "./componenets/DashboardPagination";
import new_message_icon from "../../assets/new-message-icon.png";
import interval from "../../assets/interval.png";
import { Datashare } from "../qrcode/Prescribe";


let drugId = 0;
let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};


function Dashboard() {
  const [drug, setdrug] = useState();
  const [prescribed_drug, setprescribed_drug] = useState([]);
  const [file, serfile] = useState("");

  const handleprescription = () => {
    //write code to implement the prescription process
    alert(" congratulations! prescription Done");
  };
  const handleSummarize = () => {
    //write code to summirize the patient history with gemini AI api
    alert("Health History summrary looks nice");
  };
  const handle_drug_adding_in_prescription = () => {
    // alert("Drug added in Precription");
    setprescribed_drug([...prescribed_drug, { id: drugId++, name: drug }]);
    setdrug("");
  };

  const handle_interval = () => {
    alert("interval");
  };
  const handleFileUpload = (e) => {
    e.preventDefault();
    serfile(e.target.value);
  };


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
        <button className="btn">
          <a href="/qrscan">scan QR</a>
        </button>
        <p>
          Scan this QR to view the Provider's(e.g Docter) information such as
          speciality
        </p>
        <button className="btn">
          <a href="/qrcode">show QR</a>
        </button>
        <hr></hr>
        <h1>Administer Patients</h1>
        <hr></hr>

        <div className="patient-adminitration-dashboard">
          <p style={{ textAlign: "left" }}>Search Patient Name</p>
          <div className="patient-adminitration-navigationbar">
            <div className="search-bar">
              <SearchBar />
            </div>
            <div className="notification-bar">
              {/* <button onClick={handleNotification}><img src={bell_Icon }/></button> */}
              <Notification />
            </div>
          </div>
          <div className="patient-list">



           




            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Patient id#2 - Most Recent{" "}
                  <img
                    style={{
                      marginLeft: "10px",
                      marginTop: "0px",
                      height: "20px",
                      width: "20px",
                    }}
                    src={new_message_icon}
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="dashboard-button">
                    <h3>Medical History - patient id#1 </h3>
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
                    <button onClick={handleSummarize}>Summarize</button>
                    <button onClick={handleprescription}>Prescribe</button>
                    <ul>
                      {prescribed_drug.map((drug) => (
                        <li key={drug.id}>{drug.name}</li>
                      ))}
                    </ul>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Patient id#1</Accordion.Header>
                <Accordion.Body>
                  <ul className="dashboard-button">
                    <h3>Medical History - patient id#2 </h3>
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
                    <button onClick={handleSummarize}>Summarize</button>
                    <button onClick={handleprescription}>Prescribe</button>
                    <ul>
                      {prescribed_drug.map((drug) => (
                        <li key={drug.id}>{drug.name}</li>
                      ))}
                    </ul>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="afterscan-prescribe-drug">
            <div className="input-drug">
              <input
                placeholder="Type drug name"
                value={drug}
                onChange={(e) => {
                  setdrug(e.target.value);
                }}
              />
              <input
                value={file}
                onChange={handleFileUpload}
                className="upload-file"
                content="upload"
                type="file"
              />
            </div>

            <button onClick={handle_drug_adding_in_prescription}>
              <span>&#43;</span>
            </button>
            <button className="interval" onClick={handle_interval}>
              <span>
                <img src={interval} />
              </span>
            </button>
          </div>
          <div className="dashboard-pagination">
            <DashboardPagination />
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
