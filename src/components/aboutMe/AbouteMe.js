import React, { useState } from "react";
import {
  PencilFill,
  AirplaneFill,
  MusicNoteBeamed,
  CupHotFill,
  BrushFill,
} from "react-bootstrap-icons";
import "./AbouteMe.css";
import "../../app.css";

const AboutMe = (profileData) => {
  const [iconColor, setIconColor] = useState();
  console.log("@@@@@@", profileData);
  return (
    <div className="profile-container flex-column background-dark">
      <div className="profile-item flex-row-center">
        <div className="colunm-1 flex-column-center">
          <div className="image-container  flex-column-start">
            <img
              className="profile-img"
              alt=""
              src={require("../../assets/profile.jpeg")}
              // src="https://img.freepik.com/free-photo/beautiful-confident-entrepreneur_1098-21617.jpg?size=626&ext=jpg&ga=GA1.1.50988996.1682191981&semt=ais"
            />
          </div>
        </div>

        <div className="details-container d-flex flex-column align-items-start">
          <div className="bold-title">ABOUT ME</div>
          <p className="text">
            Hello! I’m Oliver Queen. Web Developer with over 8 years of
            experience. Experienced with all stages of the development cycle for
            dynamic web projects. Having an in-depth knowledge including
            advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong
            background in management and leadership.
          </p>
          <ul>
            <li>
              <span className="thin-title"> NAME : </span>{" "}
              <span className="medium-text">
                {" "}
                <span className="medium-text"> Shailee Yadav</span>
              </span>
            </li>
            <li>
              <span className="thin-title"> DATE OF BIRTH :</span>{" "}
              <span className="medium-text"> Shailee Yadav</span>
            </li>

            <li>
              <span className="thin-title"> NATIONALITY :</span>{" "}
              <span className="medium-text"> Shailee Yadav</span>
            </li>

            <li>
              <span className="thin-title"> ADDRESS :</span>{" "}
              <span className="medium-text"> Shailee Yadav</span>
            </li>

            <li>
              <span className="thin-title"> E-MAIL :</span>{" "}
              <span className="medium-text"> Shailee Yadav</span>
            </li>
            <li>
              <span className="thin-title"> PHONE NO :</span>{" "}
              <span className="medium-text"> Shailee Yadav</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="interest">
        <div className="bold-title ">INTERESTS</div>
        <div className="my-interest flex-row flex-wrap">
          <div className="icon-container flex-column-start">
            <span
              className="icon flex-column-center border-clr"
              onMouseEnter={(e) => setIconColor("drawing")}
              onMouseLeave={(e) => setIconColor(null)}
            >
              {console.log(iconColor)}
              <PencilFill
                className="ml-4"
                color={iconColor === "drawing" ? "white " : "#00f298"}
                size={40}
              />
            </span>
            <span className="int-name">Drawing</span>
          </div>
          <div className="icon-container flex-column-start">
            <span
              className="icon flex-column-center border-clr"
              onMouseEnter={(e) => setIconColor("travel")}
              onMouseLeave={(e) => setIconColor(null)}
            >
              <AirplaneFill
                className="ml-4"
                color={iconColor === "travel" ? "white " : "#00f298"}
                size={40}
              />
            </span>
            <span className="int-name">Travel</span>
          </div>
          <div className="icon-container flex-column-start">
            <span
              className="icon flex-column-center border-clr"
              onMouseEnter={(e) => setIconColor("music")}
              onMouseLeave={(e) => setIconColor(null)}
            >
              <MusicNoteBeamed
                className="ml-4"
                color={iconColor === "music" ? "white " : "#00f298"}
                size={40}
              />
            </span>
            <span className="int-name">Music</span>
          </div>
          <div className="icon-container flex-column-start">
            <span
              className="icon flex-column-center border-clr"
              onMouseEnter={(e) => setIconColor("coffee")}
              onMouseLeave={(e) => setIconColor(null)}
            >
              <CupHotFill
                className="ml-4"
                color={iconColor === "coffee" ? "white " : "#00f298"}
                size={40}
              />
            </span>
            <span className="int-name">Coffee</span>
          </div>

          <div className="icon-container flex-column-start">
            <span
              className="icon flex-column-center border-clr"
              onMouseEnter={(e) => setIconColor("painting")}
              onMouseLeave={(e) => setIconColor(null)}
            >
              <BrushFill
                className="ml-4"
                color={iconColor === "painting" ? "white " : "#00f298"}
                size={40}
              />
            </span>
            <span className="int-name">Painting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
