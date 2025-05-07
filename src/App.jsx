import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";
import Edication from "./components/education/Edication";
import Skills from "./components/skills/Skills";

function App() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  const [translate, setTranslate] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  useEffect(() => {
    translate
      ? document
          .getElementById(translate)
          .scrollIntoView({ behavior: "smooth" })
      : "";
  }, [translate]);
  return (
    <div id="up" className="container">
      <Header setTranslate={setTranslate} />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Edication />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
