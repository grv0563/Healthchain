import React, { useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../../../firebase/config"
// import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    setemail("");
    setpassword("");
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
        {/* <label>
        <span>Display Name :</span>
        <input
          required
          type="text"
          onChange={(e) => {
            setdispalyname(e.target.value);
          }}
          value={displayname}
        />
      </label> */}
        {/* <label>
        <span>Profile thumbnail:</span>
        <input required type="file" />
      </label> */}

        <button className="btn login-btn">Login</button>
      </form>

      <p>
        <a className="forgotton-passwd-link" href="#">
          Forgotten Password ?{" "}
        </a>
      </p>
      <hr></hr>
      <div className="register-btn">
        <button className="btn">
          <a href="/signup"> Register</a>
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
