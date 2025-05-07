import { useEffect, useRef, useState } from "react";
import "./education.css";
import EdicationOne from "./Education1";

const Edication = () => {
  const education = useRef();
  return (
    <div ref={education} id="education">
      <section className="education " id="education">
        <h2 className="heading">
          My <span>Journey</span>
          <span className="animate scroll"></span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            <h3
              className="title" 
            >
              Education
            </h3>
            <div className="education-box">
              <EdicationOne
                title="Unvirstiy"
                desc="I am studing information Technology"
                date="2024-2019"
              />
              <EdicationOne
                title="Web Courses"
                desc="I took a web course at Technohom center and I got a certificate, in addtion to many yotube courses"
                date="2022-2023"
              />
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">
              Experience<span className="animate scroll"></span>
            </h3>
            <div className="education-box">
              <EdicationOne
                title="Web Developer"
                desc="I trained in a Madsolution company and got a certificate"
                date="May2024 June2024"
              />
              <EdicationOne
                title="Web Developer"
                desc="Many website have been designed to respond to all screens"
                date="2024 2023"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Edication;
