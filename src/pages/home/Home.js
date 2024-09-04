import React from "react";
import "./Home.css";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import EHR_Features from "../../assets/ehr_fearures.png";
import GreenTick from "../../assets/greenTick.png";
import Inpregress from "../../assets/pending.png";
import SheduledTask from "../../assets/sheduled.png";
function Home() {
  return (
    <div className="home-container">
      <div className="home-navbar">
        <NavigationBar />
      </div>

      <div className="home-main-area">
        <div className="home-main-area-intro">
          <div className="home-main-area-intro-1">
            <div className="home-main-area-intro-header">
              <p className="rise-color-coding">
                <b style={{ fontSize: "40px" }}>R</b>esponsive{" "}
                <b style={{ fontSize: "40px" }}>I</b>nformation{" "}
                <b style={{ fontSize: "40px" }}>S</b>haring for{" "}
                <b style={{ fontSize: "40px" }}>E</b>cosystem for Healthcare
              </p>
              <h2>
                Revitalizing Healthcare ecosystem with{" "}
                <span>Patient centric Intelligent QR Code Based </span>
              </h2>
              <h2 className="home-main-area-intro-header-colored-text">
                {" "}
                Decentralized EHR System
              </h2>
            </div>
            <div className="call-to-action">
              <button className="btn">
                <a href="https://gaurav-book-store.gitbook.io/nextgen-ehr/">
                  Research
                </a>
              </button>
              <button className="btn">
                <a href="https://www.linkedin.com/company/nextgen-ehr">
                  Connect
                </a>
              </button>
            </div>
            <p>
              We are pushing boundaries of Healthcare system with Blockahin
              Technology, Artificial Intelligence and anylytics
            </p>
            <p>
              Follow us on{" "}
              <a href="https://www.linkedin.com/company/nextgen-ehr">
                Linkedin
              </a>
            </p>
          </div>
          <div className="opportunity_and_problem">
            <h3>What we got - The Problem </h3>
            <div className="Problem-statement">
              <p>
                India is largest emerging market and counts 17.78%(1.45B) of
                world Population which means it's Healthcare needs are
                humongous. Healthcare is Highly regulated and needs lot
                information maintenance and processing systems. All this deduce
                down to need of Electronic Healthcare records(EHR) system to
                store and process the Health records of 1.45 Billion Peoples.
              </p>
              <h3>
                The biggest 2 challenges Indian Healthcare System faces are:
              </h3>
              <ol>
                <li>1. Out of Pocket Expenditure on Healthcare.</li>
                <li>
                  2. Quality Healthcare Access / Pretty Common not having access
                  at all.
                </li>
              </ol>
            </div>
            <h3>Features of NextGen EHR System</h3>
            <div className="nextgen-ehr-features">
              <img src={EHR_Features} alt="NextGen EHR system Features" />
            </div>
          </div>
          <div className="roadmap-for-implementation">
            <h3>The RoadMap</h3>
            <div className="phase-1 phase-common-css">
              <h3>Phase 1 - The Concept (Q2, 2024)</h3>
              <ul>
                <li>
                  {" "}
                  <img src={GreenTick} alt="Work Completed" /> The Concept
                  Brainstorming
                </li>
                <li>
                  {" "}
                  <img src={GreenTick} alt="Work Completed" /> Market Research
                  and Business Case
                </li>
                <li>
                  {" "}
                  <img src={GreenTick} alt="Work Completed" /> Feedback from
                  Potential Customer and Industry experts
                </li>
                <li>
                  <img src={GreenTick} alt="Work Completed" /> Pre-Launch
                  Website
                </li>
                <li>
                  {" "}
                  <img src={Inpregress} alt="Work inprogress" /> Potential
                  Customer Communication Channel Creation
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Website and
                  App's Technical Architecture Design
                </li>
              </ul>
            </div>
            <div className="phase-2 phase-common-css">
              <h3>Phase 2 - The MVP and The Product Market Fit (Q3, 2024)</h3>
              <ul>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> MVP
                  Development
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Go to Market
                  (GMT) Strategy and Marketing Planning
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Pricing Model,
                  Pitching Customer and Customer Feedback
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Finding
                  product-market-fit
                </li>
              </ul>
            </div>
            <div className="phase-3  phase-common-css">
              <h3>Phase 3 - The Growth (Q4,2024)</h3>
              <ul>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Developing the
                  Mobile App
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Customer
                  Acquisition strategy
                </li>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" /> Expanding the
                  beyond the India
                </li>
              </ul>
            </div>
            <div className="phase-4  phase-common-css">
              <h3>Phase 4 - The Scale(Q1,2025)</h3>
              <ul>
                <li>
                  {" "}
                  <img src={SheduledTask} alt="Work Scheduled" />{" "}
                  Standardization of Business process
                </li>
                <li>
                  <img src={SheduledTask} alt="Work Scheduled" /> Strategies for
                  Company's Effective and Efficient Operations
                </li>
              </ul>
            </div>
          </div>
          <div className="Whitepaper">
            <p>Learn more About NextGen EHR and RISE System?</p>
            <button className="btn">
              <a href="https://gaurav-book-store.gitbook.io/nextgen-ehr">
                WhitePaper
              </a>
            </button>
            <p>To Contact: Please Leave Email on</p>
            <p>grv.shakya0563@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
