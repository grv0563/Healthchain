import React from "react";
import "./Learn.css";
import Navbar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import HealthcareOverview from "../../assets/Healthcare.png";
function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <Navbar />
      </div>
      <div className="main-area">
        <h3>
          {" "}
          <b>What is RISE ?</b>
        </h3>
        <p style={{ textAlign: "center" }}>
          <b style={{ fontSize: "40px" }}>R</b>esponsive{" "}
          <b style={{ fontSize: "40px" }}>I</b>nformation{" "}
          <b style={{ fontSize: "40px" }}>S</b>haring{" "}
          <b style={{ fontSize: "40px" }}>E</b>cosystem for Healthcare
        </p>
        <p>
          is Software Solution which orchestrate <b>Personalized Healthcare </b>
          or <b>Precision Medicine</b> across Healthcare Industry Ecosystem. It
          solve the biggest pain points of Healthcare Industry specially focused
          on Indian Healthcare Ecosystem.
          <b>The biggest 2 challenges Indian Healthcare System faces are</b>
          <ul>
            <li>
              <b>1. Out of Pocket Expenditure on Healthcare.</b>
            </li>
            <li>
              <b>
                2. Quality Healthcare Aceess / Pretty Uncommon not having access
                at all.
              </b>
            </li>
          </ul>
        </p>
        <h4>
          {" "}
          <b>Why is this so ?</b>
        </h4>
        <p>
          Let's discuss first problem, first. why we have to pay-out-of-pocket.
          is because of lack of financial planning, education, income or
          something else much more bigger than these? My opinionated answer is
          these factor have significat contribution but these all are secondary
          to problem. One reason is that spending on Healthcare is always
          unpredicatabe. It is very hard even estimate the upper and lower limit
          of Healthcare spendings of individual or family. Unfortunatly this
          spending doesn't comes with choice whether we spend or plan to push
          for next week or month. It comes with Emergemcey. This
          unpridictability ruines millions of families per day basis, takes them
          down generations behind, some time it makes situation so severe
          families strugle to feed themselves. This seems extreme but it's not
          common countries like India. <hr></hr> So what can we do to slove? now
          let's see When I talking about the predicatability one thing comes our
          mind is that Can AI pridict/estimate our monthy/yearly spending on
          Healthcare. My answer is conflicting somewhat AI may or may not able
          to pridict. Eventhough AI managed to pridict the monthy/Yearly
          expediture on Healthcare of whole family or specific Individual. who
          will pay the bills ?. In India 60% population lives in rural area and
          have lower income but same time the Healthcare is very expensive due
          to high Competition and deficit in Healthcare professionals, large
          population ....and so on.
        </p>
        <h4>
          {" "}
          <b>Now, the Real Problem start here!</b>
        </h4>
        <p>
          We need Solution which gives access to funds(financial Aid) within
          justifiable duration in the circumstances where you need to pay Out of
          Pocket. <b>Do we need to invent the Wheel for this? </b>. the answer
          is Big No. Acuatally Solution is already there in the system but
          because of some severe challenges people can't see and access it. some
          who able to see but can't use it whenever the need because of rigid,
          rough, long and unpridictable nature of system and loose thier trust
          on the system start bad mouthing the system.
        </p>
        <br></br>
        <b>
          So what is the exiting Solution, How we can make it more usable and
          mitigate the challenges?
        </b>
        <h4>
          <b>Answer is</b>
        </h4>

        <h4>
          <b>Health Insurnace(either Private or Goverment Sponsored)</b>
        </h4>
        <p>
          but what .. wh.. what Health Insurnace 🤔. I can understand your
          emotions 😊. Let me make my point. To do so allow me to give you quick
          64000 fit picture of Healthcare Industry and it's actors. Healthcare
          Market become complex Ecosystem with lots of actors. Each actor has to
          fight for 2 forces of market:
          <b> maximizing profit and fight for Competition</b>. Each actor
          incentivize their Dependent(supplier and Venders) actors to win the
          Competition and maximize profit. Example - every pharma company has to
          convince providers(Doctors) to prescribe their new drug and has to
          negotiate with Insurnace Companies to add thier new drug in the
          Insured Drug list. Some times theses companies can be aggresive in
          their sales efforts which create tension among other actors primarily
          with patient. These incentives and tensions create complex Ecosystem
          which lead to dilemmas and Skepticism to see clearer picture and solve
          problems. Let break this barrier and visualize 64000 fit abstract view
          of Healthcare Industry.
        </p>
        <img src={HealthcareOverview} alt="Healthcare industry Overview" />
        <p>
          Healthcare Industry became quite Complex over the time with many
          actors. Let brielfy introduce each actor quicky and understand What
          role they in Healthcare.
          <ul>
            <li>
              <b>1. Patient</b>
              <p>
                Patients are the Consumer in the Healthcare. Whole Healthcare
                Industry is created and runs for Patient.
              </p>
            </li>
            <li>
              <b>2. Provider</b>
              <p>
                Providers are Professional Service Provider firms like Hospitals
                and clinics which provide Professional Services like
                Health/Disease Diagnosis or prescription for Healthcare need of
                Individual. Professional like Doctors, Nurses, technicians and
                Allied Healthcare professionals.
              </p>
            </li>
            <li>
              <b>3. Pharma or Life Science Companies</b>
              <p>
                These are Companies who create Pharmaceutical Products like
                Medicine, injection, other medical Products.
              </p>
            </li>
            <li>
              <b>4. Employer</b>
              <p>
                Most of the companies provide Health Benefits such as Health
                Insurnace and Preventive Health Checkup for Employee and his
                Dependents(family) to attract the Talent across the country and
                globe.
              </p>
            </li>
            <li>
              <b>5. Payors</b>
              <p>
                Payors are very Crucial and under rated piller of any Healthcare
                System. Payors usally comprise of 2 entitis:{" "}
                <b>Insurnace Companies and Federal/State Government. </b>These
                Entities provide Protection against unpridictable Healthcare
                expediture. Most of times Cental/Federal Government Sponsored
                Healthcare Benefits are provided via these Insurnace Companies
                for Efficiency, effectivness and wider reach. These payors faces
                lot of challenges which can be solved by emerging technologies
                like<b> AI, ML and Blockchain.</b>
              </p>
            </li>
            <li>
              <b>6. Capital Market</b>
              <p>
                Capital Market is Indirect playor of Healthcare Industry.
                Payors(Insurnace Companies) make profit primarily in 2 ways{" "}
                <b>1. Underwriting 2. Capital Market </b>
              </p>
            </li>
          </ul>
        </p>
        <h4>Back to discussion ...</h4>
        <p>
          Now, you can see the Big picture. Patient, provider and
          Payors(Insurnace companies) are the Big Important 3. Insurance
          Business is about taking risk to reduce other's risk of Business,
          Machinery, Investment,falling sick ... etc. These companies have
          strong core competency in financial Markets and uses mathematical laws
          like "Law of large numbers" and probability to quantify and predict
          the possibilty of number of people falling sick out of monthly/yearly
          sold premiums. Making sure the net sum must be positive(profit).
          Insurance works pretty fine so why we are still facing problems like
          families go broke beacause of unexpected expediture of Healthcare. The
          answer is these companies need to solve vital problems before
          unlocking the full potential for insurance.
          <h4>Problem 1 - </h4>Long, Hectic, Mannual and ambiguous(not
          transparent) Claiming process which create Skepticism and Distrust.
          further this leads to fraudulent activites where regulator unable to
          trace.
          <h4>Problem 2 - </h4>Less General purpose awareness about Insurance
          and Healthcare. Many people buy the Health(or General) Insurance but
          Agent(Intermediary premium seller b/w company and Premium holder) does
          not communicate T&C of Premium which hurt their Experience with
          insurance.
        </p>
        <h4>Solution to these Problems</h4>
        <p>
          <h6>Solution 1 - </h6>
          We can make Decentralized Blockchain Network (Consortium) among the
          all premium holders and insurance companies and if necessory we can
          include regulators and providers for smoothening the claiming process.
        </p>

        <p>
          <h6>Solution 2 -</h6>
          We can use AI which help premium holder to search and find premium
          which meets their requirment and expections. AI will help them to
          understand the T&C of premiums. They can ask questions like "How much
          money they can claim and in what condition and when they can claim
          it", also when/what conditions they can't claim it at all. This will
          build enhance the user Experience and build long term trust.
        </p>
        <hr></hr>
        <hr></hr>
        <h4>Now, 2nd Problem - Quality Healthcare Aceess to Everbody</h4>
        <p>
          Most of Hospitals works in silos, do not share data among provider(not
          even patient) so that Health hsitory of Patient can be maintained.
          This Health history can be used in Medical Diagnosis to enhance the
          Quality. This Health hsitory will help as provision Personalized
          Healthcare or Precision Medicine.
        </p>
        <h4>Solution to Healthcare Quality or Personalized Healthcare</h4>
        <p>
          We can build QR(quick Response) code Based, easy sharable and Patient Owned,
          interoperable across industry actors Health Inforamtion sharing
          system.
        </p>
        <h4>Conclusion</h4>
        <p>
          Personalized Healthcare and accessibility of Healthcare are the biggest problems in the Indian Healthcare System. With emerging technologies like AI and Blockchain, we can solve these problems. We are alredy stated pioneering in this field.
          Thank you for reading. You have learned something Valuable. 
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
