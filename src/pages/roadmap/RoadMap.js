import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import "./RoadMap.css"
import GreenTick from "../../assets/greenTick.png"
import Inpregress from "../../assets/pending.png"
import SheduledTask from '../../assets/sheduled.png'

function RoadMap() {
  return (
    <div className='roadmap-container'>
      <div className='roadmap-header'>
        <NavigationBar/>
      </div>
      <div className='roadmap-main-area'>
        <h1>The RoadMap</h1>
        <div className="roadmap-for-implementation">
            
            <div className="phase-1 phase-common-css">
              <h3>Phase 1 - The Concept (Q2, 2024)</h3>
              <ul>
                <li> <img src={GreenTick} alt="Work Completed" /> The Concept Brainstorming</li>
                <li> <img src={GreenTick} alt="Work Completed" /> Market Research and Business Case</li>
                <li> <img src={GreenTick} alt="Work Completed" /> Feedback from Potential Customer and Industry experts</li>
                <li><img src={GreenTick} alt="Work Completed" /> Pre-Launch Website</li>
                <li> <img src={Inpregress} alt="Work inprogress" /> Potential Customer Communication Channel Creation</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Website and App's Technical Architecture Design</li>
              </ul>
            </div>
            <div className="phase-2 phase-common-css">
              <h3>Phase 2 - The MVP and The Product Market Fit (Q3, 2024)</h3>
              <ul>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> MVP Development</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Go to Market (GMT) Strategy and Marketing Planning</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Pricing Model, Pitching Customer and Customer Feedback</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Finding product-market-fit</li>
              </ul>
            </div>
            <div className="phase-3  phase-common-css">
              <h3>Phase 3 - The Growth (Q4,2024)</h3>
              <ul>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Developing the Mobile App</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Customer Acquisition strategy</li>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Expanding the beyond the India</li>
              </ul>
            </div>
            <div className="phase-4  phase-common-css">
              <h3>Phase 4 - The Scale(Q1,2025)</h3>
              <ul>
                <li> <img src={SheduledTask} alt="Work Scheduled" /> Standardization of Business process</li>
                <li>
                <img src={SheduledTask} alt="Work Scheduled" /> Strategies for Company's Effective and Efficient Operations
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>We are on the mission making all tickes green listed in the Roadmap.</h3>
          </div>
          <div className="Whitepaper">
            <p>Learn more About NextGen EHR and RISE System?</p>
            <button className="btn"><a href="https://gaurav-book-store.gitbook.io/nextgen-ehr">WhitePaper</a></button>
            <p>To Contact: Please Leave Email on</p>
            <p>grv.shakya0563@gmail.com</p>
          </div>
      </div>
      <div className='roadmap-footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default RoadMap
