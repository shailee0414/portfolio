import React from "react";
import { MortarboardFill, Bank2 } from "react-bootstrap-icons";
import "./Education.css";
import "../../app.css";

const Education = ({ educationDetails, page, background }) => {
  return (
    <>
      <div
        className={`${background} education-container flex-column-center screen-large`}
      >
        <div className="bold-title">{page}</div>
        <div className="flex-column-center">
          <div>
            <span className=" edu-icon flex-column-center border-clr">
              {page === "EDUCATION" ? (
                <MortarboardFill color="#00f298" size={40} />
              ) : (
                <Bank2 color="#00f298" size={40} />
              )}
            </span>
          </div>
          {educationDetails?.map((item, index) => {
            return (
              <div key={`edu${index}`}>
                {index % 2 === 0 ? (
                  <div className="flex-row-center edu-content ">
                    <div className="cllg-name flex-column">
                      <span className="medium-title">{item?.title}</span>
                      <div>
                        <span className="text">{item.duration} </span>
                        <span className="medium-text">
                          | {item?.organization}
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex-column-center align-self-stretch"
                      width="20%"
                    >
                      <div className="divider background-green flex-grow-1"></div>
                      <div className="circle border-clr flex-column-center">
                        <span className="circle-sm background-green  "> </span>{" "}
                      </div>
                      <div className="divider background-green flex-grow-1"></div>
                    </div>
                    <div className="description text">{item?.description}</div>
                  </div>
                ) : (
                  <div className="flex-row-center edu-content ">
                    <div className="cllg-name text"> {item?.description}</div>
                    <div
                      className="flex-column-center align-self-stretch"
                      width="20%"
                    >
                      <div className="divider background-green  flex-grow-1"></div>
                      <div className="circle border-clr flex-column-center">
                        <span className="circle-sm background-green  "> </span>{" "}
                      </div>
                      <div className="divider background-green flex-grow-1"></div>
                    </div>
                    <div className="description ">
                      <div className="medium-title"> {item?.title}</div>
                      <div>
                        <span className="text"> {item?.duration} </span>
                        <span className="medium-text">
                          | {item?.organization}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="end-dot background-green"></div>
        </div>
      </div>
      <div className=" background-grey screen-small">
        <div
          className="bold-title  flex-row-center"
          style={{ paddingBottom: "60px" }}
        >
          {page}
        </div>
        <div className="at-small-screen d-flex flex-column align-items-start">
          <div className="flex-column-center width-60">
            <span className=" edu-icon-sm flex-column-center border-clr">
              {page === "EDUCATION" ? (
                <MortarboardFill color="#00f298" size={30} />
              ) : (
                <Bank2 color="#00f298" size={30} />
              )}
            </span>
            <div className="divider background-green"></div>
          </div>
          {educationDetails?.map((item, eduIndex) => {
            return (
              <div
                key={`${eduIndex}_id_edu`}
                className=" d-flex flex-row align-items-start"
              >
                <div className="flex-column-center width-60 align-self-stretch">
                  <div className="circle border-clr flex-column-center">
                    <span className="circle-sm background-green"> </span>{" "}
                  </div>
                  <div className="divider-sm background-green "></div>
                </div>
                <div className=" d-flex gap-1 flex-column width-80  sm-description-cont">
                  <span className="medium-title"> {item?.title}</span>
                  <div>
                    <span className="text"> {item?.duration} </span>
                    <span className="medium-text">| {item?.organization}</span>
                  </div>
                  <div className="text"> {item?.description}</div>
                </div>
              </div>
            );
          })}

          <div className="width-60 flex-column-center">
            <div className="end-dot background-green"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
