import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            {/* <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div> */}
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Siddhi Vigneshwar </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kakinada, Andhra Pradesh (India)
                </span>
                . I am pursuing my graduation in BTech in the stream of Electrical and Electronics Engineering
                from{" "}
                <span className="different">
                  Sri Vasavi Engineering College, Tadepalligudem (AP)
                </span>
                {/* . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school. */}
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneur{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
