import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import QRgenerator from "./pages/qrcode/QRgenerator";
import Schedules from "./pages/schedules/Schedules";
import AfterScan from "./pages/qrcode/AfterScan";
import AfterScan1 from "./pages/qrcode/AfterScan1";
import Login from "./pages/auth/login/Login";
import { useState } from "react";
import Success from "./pages/auth/signup/Success";
import Dashboard from "./pages/dashboards/Dashboard";
import Profile from "./pages/profile/Profile";
import SignOut from "./pages/auth/signout/SignOut";
import PatientDash from "./pages/dashboards/patientDashboard/PatientDash";
import InsurnaceDash from "./pages/dashboards/insurnaceDashboard/InsurnaceDash";
import PharmaDash from "./pages/dashboards/pharmaDashboard/PharmaDash";
import ProviderDash from "./pages/dashboards/provideDashboard/ProviderDash";
import TestCenterDash from "./pages/dashboards/Test_Center_Dashboard/TestCenterDash";
import Scan from "./pages/qrcode/Scan";
import Prescribe from "./pages/qrcode/Prescribe";
import SearchBar from "./pages/dashboards/componenets/SearchBar";

function App() {
  const [loggedin, setLoggedin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/qrcode" element={<QRgenerator />} />
          <Route path="/qrscan" element={<Scan />} />
          <Route path="/prescribe" element={<Prescribe />} />
          <Route path="/afterscan" element={<AfterScan />} />
          <Route path="/afterscan1" element={<AfterScan1 />} />
          <Route path="/shedules" element={<Schedules />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signout" element={<SignOut />} />
          # Dashboards
          <Route path="/patientDashboard" element={<PatientDash />} />
          <Route path="/insurnaceDashboard" element={<InsurnaceDash />} />
          <Route path="/pharmaDashboard" element={<PharmaDash />} />
          <Route path="/provideDashboard" element={<ProviderDash />} />
          <Route path="/testcenterDashboard" element={<TestCenterDash />} />
          


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
