import React from "react";
import { useState } from "react";
import AboutMe from "./about.js";
import MainPage from "./main.js";
import Projects from "./projects.js";
import Job from "./job.js";
import Wander from "./wander.js";
import "./App.css";

function App() {
  const [page, setPage] = useState(<MainPage />);
// ---------------------- changes page to about me page --------------------------
  function handleClickAbout() {
    setPage(<AboutMe />);
  }
  //---------------------- changes page to projects page -------------------------
  function handleClickProjects() {
    setPage(<Projects />);
  }
  //----------------------- changes page to job page -----------------------------
  function handleClickJob() {
    setPage(<Job />);
  }
  //---------------------- changes page to wanderlust page -----------------------
  function handleClickWander() {
    setPage(<Wander />);
  }
  //---------------------- changes page to home page -----------------------------
  function handleClickHome() {
    setPage(<MainPage />);
  }
  return (
    <div id="body">
      <body>
        <h1 class="hope" onClick={handleClickHome}>Hope Swanke</h1>
        <div id="nav-bar">
          <h3 class="pages" onClick={handleClickAbout}>About Me</h3>
          <h3 class="pages" onClick={handleClickProjects}>My Projects</h3>
          <h3 class="pages" onClick={handleClickJob}>Work History</h3>
          <h3 class="pages" onClick={handleClickWander}>Wanderlust</h3>
        </div>
        
        {page}
        <div id="footer">
          <h2 id="footer-title">Contact:</h2>
          <div id="contact-info">
            <a href="https://www.linkedin.com/in/hope-swanke-aa653b112/" target="_blank"><h3 class="footer-info" >LinkinedIn</h3></a>
            <a href="https://www.instagram.com/hopeswanke/" target="_blank"><h3 class="footer-info" >Instagram</h3></a>
            <h3 class="footer-info" >hopeswanke@gmail.com</h3>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
