import React from "react";
import './dock.scss'
import github from "../assets/github.png";
import calendar from "../assets/calendar.png";
import gmail from "../assets/gmail.png";
import notebook from "../assets/notebook.png";
import pdf from "../assets/pdf.png";
import spotify from "../assets/spotify.png";
import cli from "../assets/command-prompt.png"
import link from "../assets/chain.png";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github">
        <img src={github} alt="GitHub" />
      </div>

      <div className="icon calender">
        <img src={calendar} alt="Calendar" />
      </div>

      <div className="icon gmail">
        <img src={gmail} alt="Gmail" />
      </div>

      <div className="icon notebook">
        <img src={notebook} alt="Notebook" />
      </div>

      <div className="icon pdf">
        <img src={pdf} alt="PDF" />
      </div>

      <div className="icon spotify">
        <img src={spotify} alt="Spotify" />
      </div>

      <div className="icon cli">
        <img src={cli} alt="cli" />
      </div>

      <div className="icon link">
        <img src={link} alt="link" />
      </div>
    </footer>
  );
};

export default Dock;
