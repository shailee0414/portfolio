import React from "react";
import { MortarboardFill } from "react-bootstrap-icons";
import "./Education.css";
import "../../app.css";

const Education = () => {
  return (
    <>
      <div className="education-container background-grey flex-column-center screen-large">
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
              laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
              Vivamus tristique rhoncus enim.
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
              laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
              Vivamus tristique rhoncus enim.
            </div>
          </div>
          <div className="end-dot background-green"></div>
        </div>
      </div>
      <div className=" background-grey screen-small">
        <div
          className="bold-title  flex-row-center"
          style={{ paddingBottom: "60px" }}
        >
          EDUCATION
        </div>
        <div className="at-small-screen d-flex flex-column align-items-start">
          <div className="flex-column-center width-60">
            <span className=" edu-icon-sm flex-column-center border-clr">
              <MortarboardFill color="#00f298" size={30} />
            </span>
            <div className="divider background-green"></div>
          </div>
          <div className=" d-flex flex-row align-items-start">
            <div className="flex-column-center width-60">
              <div className="circle border-clr flex-column-center">
                <span className="circle-sm background-green"> </span>{" "}
              </div>
              <div className="divider-sm background-green"></div>
            </div>
            <div className=" d-flex gap-1 flex-column width-80">
              <span className="medium-title">BACHALOR DIGREE</span>
              <div>
                <span className="text">JAN 2009 - MAY 2010 </span>
                <span className="medium-text">| DEFODIL UNIVERSITY</span>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
                Vivamus tristique rhoncus enim.
              </div>
            </div>
          </div>
          <div className=" d-flex flex-row align-items-start">
            <div className="flex-column-center width-60">
              <div className="circle border-clr flex-column-center">
                <span className="circle-sm background-green"> </span>{" "}
              </div>
              <div className="divider-sm background-green"></div>
            </div>
            <div className=" flex-column width-80">
              <span className="medium-title">BACHALOR DIGREE</span>
              <div>
                <span className="text">JAN 2009 - MAY 2010 </span>
                <span className="medium-text">| DEFODIL UNIVERSITY</span>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
                Vivamus tristique rhoncus enim.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
