import React from "react";
import { Github } from "react-bootstrap-icons";
import "../../app.css";
import "./Work.css";

const Work = () => {
  const project = [
    {
      title: " Maervel Studio",
      description: "description",
      github: "###",
      vercel: "https://marvel-studio-kae8.vercel.app/",
    },
    {
      title: "Marvel Studio",
      description: "description",
      github: "###",
      vercel: "https://marvel-studio-kae8.vercel.app/",
    },
    {
      title: "coincap",
      description: "description",
      github: "###",
      vercel: "https://coincap-wheat.vercel.app/",
    },
    {
      title: "Book Search",
      description: "description",
      github: "###",
      vercel: "https://book-library-eta.vercel.app/",
    },
    {
      title: "Online test Demo",
      description: "description",
      github: "###",
      vercel: "https://online-test-demo.vercel.app/",
    },
    {
      title: "Trail Blazer",
      description: "description",
      github: "###",
      vercel: "https://trail-blazer.vercel.app/",
    },
  ];
  return (
    <div className="background-dark  d-flex flex-column align-items-center">
      <div className=" background-dark bold-title title-container">
        {" "}
        SOME OF MY WORKS
      </div>
      <div className="work-container d-flex flex-column align-items-center ">
        <div className="d-flex  gap-5 flex-wrap flex-row align-items-center justify-content-center">
          {project.map((item, index) => {
            return (
              <div className="project-item d-flex flex-column  justify-content-between">
                <div className="project-description ">
                  <div className="d-flex flex-column gap-1">
                    <div className="pointer align-self-end">
                      <Github size={40} />
                    </div>
                    <div className="hover-title">DESCRIPTION </div>
                    <div className="hover-description">
                      Hello! I’m Oliver Queen. Web Developer with over 8 years
                      of experience. Experienced with all stages of the
                      development cycle for dynamic web projects. Having an
                      in-depth knowledge including advanced HTML5, CSS3,
                      JavaScript, jQuery, Angular JS. Strong background in
                      management and leadership.
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-1">
                  <div className="pointer align-self-end">
                    <Github size={40} />
                  </div>
                  <span className="medium-title">{item.title}</span>
                </div>
                <div>
                  <div className="label">
                    Used Technology <span className="hr-line"></span>
                  </div>
                  <div className="d-flex flex-row  gap-3 flex-wrap pt-4">
                    <span className="technology flex-row-center">React</span>
                    <span className="technology flex-row-center">React</span>
                    <span className="technology flex-row-center">React</span>
                    <span className="technology flex-row-center">React</span>
                    <span className="technology flex-row-center">React</span>
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
