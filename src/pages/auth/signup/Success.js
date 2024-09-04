import React from "react";
import "./Success.css";
function Success() {
  return (
    <div className="success-conatiner">
      <div className="message">
        <h1>Thank you for Registering!</h1>
       <p>To Login Click Below button </p> 
        <button
          className="btn"
          onClick={(e) => {
            window.location.replace("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Success;
