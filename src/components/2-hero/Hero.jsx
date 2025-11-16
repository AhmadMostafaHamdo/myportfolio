import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section" id="about">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./personal.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          FrontEnd Developer
        </motion.h1>
        <div className="text-animate">
          <h3>Front-End Developer</h3>
          <span className="animate"></span>
        </div>
        <p className="sub-title">
          I’m Ahmad Hamdo, a front-end developer in lattakia City.
        </p>

        <div className="all-icons flex">
          <Link to="https://www.linkedin.com/in/ahmad-hamdo-669b97388/" target="_blank">
            <div className="icon icon-linkedin"></div>
          </Link>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
