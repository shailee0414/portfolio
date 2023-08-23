import React from "react";
import { Github } from "react-bootstrap-icons";
import "../../app.css";
import "./Work.css";

const Work = ({ projects }) => {
  const onClickCard = (value) => {
    window.open(value, "_blank");
  };

  return (
    <div className="background-dark  d-flex flex-column align-items-center">
      <div className=" background-dark bold-title title-container">
        {" "}
        SOME OF MY WORKS
      </div>
      <div className="work-container d-flex flex-column align-items-center ">
        <div className="d-flex  gap-5 flex-wrap flex-row align-items-center justify-content-center">
          {projects?.map((item, index) => {
            return (
              <div
                onClick={(e) => {
                  onClickCard(item?.gitRepo);
                }}
                key={`work_${index}`}
                className="project-item d-flex flex-column  justify-content-between pointer"
              >
                <div className="project-description ">
                  <div className="d-flex flex-column gap-3">
                    <div className="pointer d-flex justify-content-between align-items-center">
                      <div className="thin-title">DESCRIPTION </div>
                      <Github size={40} color="#a6bdc1" />
                    </div>

                    <div className="hover-description ">
                      {item?.description}{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-1">
                  <div className="pointer align-self-end">
                    <Github size={40} />
                  </div>
                  <span className="medium-title pr-title">{item?.title}</span>
                </div>
                <div>
                  <div className="label">
                    Technologies used <span className="hr-line"></span>
                  </div>
                  <div className="d-flex flex-row  gap-2 flex-wrap pt-4">
                    {item?.usedTechnology?.map((skill, skillIndex) => {
                      return (
                        <span
                          key={`${skillIndex}_used_tech`}
                          className="technology flex-row-center"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
