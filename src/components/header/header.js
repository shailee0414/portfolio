import React from "react";
import "../../app.css";
import "./header.css";

const Header = ({ linkedin, github }) => {
  const onClickLink = (value) => {
    window.open(value, "_blank");
  };
  return (
    <div className="  header d-flex flex-column justify-content-center  align-items-center">
      <div className="d-flex gap-4 align-items-center">
        <span
          className="flex-column-center pointer medium-text tab"
          onClick={(e) => {
            onClickLink(github);
          }}
        >
          Github
        </span>
        <span
          className="flex-column-center pointer medium-text tab"
          onClick={(e) => {
            onClickLink(linkedin);
          }}
        >
          LinkedIn
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
