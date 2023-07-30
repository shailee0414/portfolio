import React from "react";
import { MortarboardFill } from "react-bootstrap-icons";
import "./Education.css";
import "../../app.css";

const Education = () => {
  return (
    <div className="education-container background-grey flex-column-center">
      <div className="bold-title">EDUCATION</div>
      <div className="flex-column-center">
        <div>
          <span className=" edu-icon flex-column-center border-clr">
            <MortarboardFill color="#00f298" size={40} />
          </span>
        </div>
        <div className="flex-row-center edu-content ">
          <div className="cllg-name text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus
            tristique rhoncus enim.
          </div>
          <div className="flex-column-center" width="20%">
            <div className="divider background-green"></div>
            <div className="circle border-clr flex-column-center">
              <span className="circle-sm background-green"> </span>{" "}
            </div>
            <div className="divider background-green"></div>
          </div>
          <div className="description ">
            <div className="medium-title">BACHALOR DIGREE</div>
            <div>
              <span className="text">JAN 2009 - MAY 2010 </span>
              <span className="medium-text">| DEFODIL UNIVERSITY</span>
            </div>
          </div>
        </div>
        <div className="flex-row-center edu-content ">
          <div className="cllg-name flex-column">
            <span className="medium-title">BACHALOR DIGREE</span>
            <div>
              <span className="text">JAN 2009 - MAY 2010 </span>
              <span className="medium-text">| DEFODIL UNIVERSITY</span>
            </div>
          </div>
          <div className="flex-column-center" width="20%">
            <div className="divider background-green"></div>
            <div className="circle border-clr flex-column-center">
              <span className="circle-sm background-green"> </span>{" "}
            </div>
            <div className="divider background-green"></div>
          </div>
          <div className="description text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus
            tristique rhoncus enim.
          </div>
        </div>
        <div className="end-dot background-green"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Education;
