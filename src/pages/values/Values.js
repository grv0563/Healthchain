import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

function Values() {
  return (
    <div className="value-containers">
      <div className="value-navbar">
        <NavigationBar />
      </div>
      <div className="value-main">
      Values
      </div>
      <div className="value-footer">
        <Footer/>
      </div>
      

    </div>
  );
}

export default Values;
