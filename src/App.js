import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import QRcode from "./pages/qrcode/QRcode";
import Schedules from "./pages/schedules/Schedules";
import AfterScan from "./pages/qrcode/AfterScan";
import Login from "./pages/auth/login/Login";
import Scan from "./pages/qrcode/Scan";
import { useState } from "react";
import Success from "./pages/auth/signup/Success";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const [loggedin, setLoggedin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/qrcode" element={<QRcode />} />
          <Route path="/qrscan" element={<Scan />} />
          <Route path="/afterscan" element={<AfterScan />} />
          <Route path="/shedules" element={<Schedules />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
