import React from "react";
import "../../app.css";
import "./header.css";

const Header = () => {
  return (
    <div className="  header d-flex flex-column justify-content-center ">
      <div className="d-flex gap-4 align-items-center">
        <span className="flex-column-center">
          <a href="/">Github</a>
        </span>
        <span className="flex-column-center">
          <a href="/">LinkedIn</a>
        </span>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
