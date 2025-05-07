import { useEffect, useState } from "react";

const EdicationOne = ({ title, desc, date }) => {
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
        <div className="education-content">
        <div className="content">
                <div className="year"><i className="bx bxs-calender"></i>{ date}</div>
                {theme === "dark" ?
                    <h3>{title}</h3>
                    : <h3 style={{color: "#00abf0"}}>{ title}</h3>
                }
                 {theme === "dark" ? (
          <p>
          {desc}
      </p>
        ) : (
            <p style={{color:"#00abf0"}}>
            {desc}
        </p>
        )}
        </div>
          </div>
    )
}
export default EdicationOne;