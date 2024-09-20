import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [selectedActor, setSelectedActor] = useState("Option 1");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    setemail("");
    setpassword("");
    // window.location.replace("/dashboard");
    console.log(selectedActor);
    if(selectedActor == "Option 1"){
      window.location.replace("/patientDashboard");
  
    }
    if(selectedActor == "Option 2"){
      window.location.replace("/dashboard");
      
    }
    if(selectedActor == "Option 3"){
      window.location.replace("/testcenterDashboard");
      
    }
    if(selectedActor == "Option 4"){
      window.location.replace("/pharmaDashboard");
      
    }
    if(selectedActor == "Option 5"){
      window.location.replace("/insurnaceDashboard");
      
    }
    if(selectedActor == "Option 6"){
      window.location.replace("/researchdashboard");
      
    }
  
  };

  const handleHealthcareActor = (e) => {
    e.preventDefault();
    console.log(selectedActor);
    setSelectedActor(e.target.value);
  };


  return (
    <div className="auth-form">
      <form onSubmit={handlesubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <label>
          <span>Select Category:</span>
          <select value={selectedActor} onChange={handleHealthcareActor}>
            <option value="Option 1">Patient</option>
            <option value="Option 2">Healthcare Provider</option>

            <option value="Option 3">Testing Center</option>
            <option value="Option 4">Pharma/Life-Science Company</option>
            <option value="Option 5">Insurance Company</option>
            <option value="Option 6">Research Institute/College/School</option>

          </select>
        </label>
        <button className="btn login-btn">
          {/* <a href="/dashboard">Login</a> */}
          Login
        </button>
      </form>

      <p>
        <a className="forgotton-passwd-link" href="#">
          Forgotten Password ?{" "}
        </a>
      </p>
      <hr></hr>
      <div className="register-btn">
        <button
          onClick={(e) => {
            window.location.replace("/signup");
          }}
          className="btn"
        >
          Register
        </button>
      </div>
      <p>
        Need help?{" "}
        <a className="contact-help-link" href="#">
          {" "}
          contact us
        </a>
      </p>
    </div>
  );
}

export default Login;
