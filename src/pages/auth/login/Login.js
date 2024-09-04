import React, { useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import {app} from "../../../firebase/config"
// import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    setemail("");
    setpassword("");
    window.location.replace("/dashboard");
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

export default Signup;
