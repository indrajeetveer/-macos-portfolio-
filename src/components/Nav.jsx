import React from "react";
import './nav.scss'
import apple from "../assets/apple.png";
import wifi from "../assets/wifi.png"
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src={apple} alt="img" />
        </div>

        <div className="nav-item">
          <p>Indrajeet Veer</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Windo</p>
        </div>

        <div className="nav-item">
          <p>Terminla</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
            <img src={wifi} alt="img"/>
        </div>

        <div className="nav-icon">
            <DateTime/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
