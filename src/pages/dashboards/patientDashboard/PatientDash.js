import React from "react";
import { useState } from "react";
import Footer from "../../../components/Footer";
import "./PatientDash.css";
import Profile_Header from "../../../components/Profile_Header";
import interval from "../../../assets/interval.png";
import MedicalHistoryExplain from "./MedicalHistoryExplain";
import Search from "./Search";

let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};


function PatientDash() {
  const [search, setsearch] = useState();
let searchString="";
  function handleExplore(e){
    
    }
    

  return (
    <div className="afterscan-container">
      <div className="afterscan-header">
        <Profile_Header userName="MR. Gaurav Shakya (Patient)" />
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
        <div className="explain-medical-history">
        <MedicalHistoryExplain />
        </div>
        

        <div className="explore">
          <input
            placeholder="Pursue your Health "
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          {/* <button onClick={handleExplore}>explore</button>
          <p>
            {searchString}
          </p>
           */}
           <Search searchStr={search} />
        </div>
      </div>
      <div className="aterscan-footer">
        <Footer />
      </div>
    </div>
  );
}

export default PatientDash;
