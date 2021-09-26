import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header-wrapper">
      <div>
        <ul>
          <h1 className="header-logo">
            Motor<span className="show-colour">Show</span>
          </h1>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="head-container">
        <div className="header-title">
          <h1>
            HIRE <span className="show-colour">CARS </span>
            <br />
            FOR A MOTOR-SHOW
          </h1>
          <h5 className="budget-bg">
            {" "}
            <span className="total-budget-text-style">
              TOTAL BUDGET: $1000 MILLION
            </span>
          </h5>
        </div>
        <div className="header-image"></div>
      </div>
    </div>
  );
};

export default Header;
