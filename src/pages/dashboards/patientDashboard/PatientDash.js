import React, { useState } from "react";
import Footer from "../../../components/Footer";
import "./PatientDash.css";
import Profile_Header from "../../../components/Profile_Header";
import interval from "../../../assets/interval.png";

let drugId = 0;
let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};
let x = [];
let i = 0;

function PatientDash() {
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
    <div className="afterscan-container">
      <div className="afterscan-header">
        <Profile_Header />
      </div>
      <div className="afterscan-main">
        <h1>Patient History (demo)</h1>
        <ul>
          <li>Medical_tests</li>
          <p>{patientHealthRecords.medical_tests[0]}</p>
          <p>{patientHealthRecords.medical_tests[1]}</p>

          <li>X_ray_Reports</li>
          <p>{patientHealthRecords.x_rays[0]}</p>
          <p>{patientHealthRecords.x_rays[1]}</p>
          <li>MRI_scans</li>
          <p>{patientHealthRecords.mri_scans[0]}</p>
          <p>{patientHealthRecords.mri_scans[1]}</p>
          <li>Prescriptions</li>
          <p>{patientHealthRecords.prescriptions[0]}</p>
          <p>{patientHealthRecords.prescriptions[1]}</p>
        </ul>
        <button onClick={handleSummarize}>Summarize</button>
        <button onClick={handleprescription}>Prescribe</button>
        <ul>
          {prescribed_drug.map((drug) => (
            <li key={drug.id}>{drug.name}</li>
          ))}
        </ul>
        <ul>
          <li>{file}</li>
        </ul>
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
      </div>
      <div className="aterscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default PatientDash;
