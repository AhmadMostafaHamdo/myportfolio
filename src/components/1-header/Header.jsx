import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ setTranslate }) => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link to="/#about" onClick={() => setTranslate("about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#project" onClick={() => setTranslate("project")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#education" onClick={() => setTranslate("education")}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={() => setTranslate("skills")}>
              Skills
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => {
                  setTranslate("about");
                  setshowModal(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#project"
                onClick={() => {
                  setTranslate("project");
                  setshowModal(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#education"
                onClick={() => {
                  setTranslate("education");
                  setshowModal(false);
                }}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/#skills"
                onClick={() => {
                  setTranslate("skills");
                  setshowModal(false);
                }}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
