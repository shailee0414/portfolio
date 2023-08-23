import React from "react";
import "../../app.css";
import "./Skills.css";

const Skills = ({ skills }) => {
  return (
    <div className="background-grey skill-container d-flex flex-column justify-content-center align-items-center">
      <div className="bold-title"> PROFESSIONAL SKILLS</div>
      <div className="d-flex flex-row skill-content">
        {skills?.map((skill, index) => {
          return (
            <div className="skill-item" key={`skill_${index}`}>
              <div className="medium-text">
                {skill?.skillName} - {skill?.skillValue}%{" "}
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow={`${skill?.skillValue}`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${skill?.skillValue}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
