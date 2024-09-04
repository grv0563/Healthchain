import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import QRcode from "./pages/qrcode/QRcode";
import Schedules from "./pages/schedules/Schedules";
import Mission from "./pages/mission/Mission";
import Learn from "./pages/learn/Learn";
import Values from "./pages/values/Values";
import AfterScan from "./pages/qrcode/AfterScan";
import Login from "./pages/auth/login/Login";
import Scan from "./pages/qrcode/Scan"
import Vision from "./pages/vision/Vision"
import Aboutus from "./pages/about/Aboutus"
import RoadMap from "./pages/roadmap/RoadMap"
import { useState } from "react";
function App() {
  const [loggedin,setLoggedin]=useState(true);
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/qrscan" element={<Scan />} />
        <Route path="/afterscan" element={<AfterScan />} />
        <Route path="/shedules" element={<Schedules />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/values" element={<Values />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/roadmap" element={<RoadMap />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
