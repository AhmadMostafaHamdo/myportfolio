import { useRef } from "react";
import "./education.css";
import EducationOne from "./Education1";

const Education = () => {
  const education = useRef();
  return (
    <div ref={education} id="education">
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>
          <span className="animate scroll"></span>
        </h2>

        <div className="education-row">
          {/* ===== Education Column ===== */}
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <EducationOne
                title="Bachelor of Information Technology"
                desc="Graduated with strong skills in software development, networking, and database management."
                date="2019 - 2025"
              />

              <EducationOne
                title="Web Development Courses"
                desc="Completed professional training at Technohom Center and supplemented with advanced online courses."
                date="2022 - 2023"
              />
            </div>
          </div>

          {/* ===== Experience Column ===== */}
          <div className="education-column">
            <h3 className="title">
              Experience <span className="animate scroll"></span>
            </h3>
            <div className="education-box">
              <EducationOne
                title="Web Developer Intern"
                desc="Gained hands-on experience at Madsolution Company on real-world projects."
                date="June 2024 - May 2025"
              />

              <EducationOne
                title="Freelance Web Developer & Frontend Trainer"
                desc="Built responsive websites for clients and conducted frontend training sessions."
                date="2023 - 2025"
              />

              <EducationOne
                title="Web Development Projects"
                desc="Developed user-friendly, responsive websites optimized for all devices."
                date="2023 - 2025"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
