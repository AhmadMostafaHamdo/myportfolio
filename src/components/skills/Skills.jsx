import "./skills.css";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span> <span className="animate scroll"></span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  React <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Redux <span>75%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Framer-motion<span>75%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  JavaScript <span>75%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  SASS <span>70%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  CSS <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Bootstarp <span>70%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
