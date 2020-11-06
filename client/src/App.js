// global imports
import React from "react";
import { useState } from "react";
// function imports for my pages
import AboutMe from "./pages/about.js";
import MainPage from "./pages/main.js";
import Projects from "./pages/projects.js";
import Job from "./pages/job.js";
import Wander from "./pages/wander.js";
// css import
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
  // ---------------------- changes page to home page -----------------------------
  function handleClickHome() {
    setPage(<MainPage />);
  }
  return (
    // containing body
    <div id="body">
      <body>
      {/*  ----------------------------------- HEADER -------------------------------------- */}
        {/* header and when click brings you to home page */}
        <h1 class="hope" onClick={handleClickHome}>Hope Swanke</h1>
        {/*  --------------------------------- NAV BAR ------------------------------------ */}
        {/* nav bar container */}
        <div id="nav-bar">
          {/* on click brings you to the About me page */}
          <h3 class="pages" onClick={handleClickAbout}>About Me</h3>
          {/* on click brings you to my projects page */}
          <h3 class="pages" onClick={handleClickProjects}>My Projects</h3>
          {/* on click brings you to my work page */}
          <h3 class="pages" onClick={handleClickJob}>Work History</h3>
          {/* on click brings you to my wanderlust page */}
          <h3 class="pages" onClick={handleClickWander}>Wanderlust</h3>
        </div>
        {/* ------------------------------------ MAIN SECTION ------------------------------------ */}
        {/* variable that sets the page depending on which function is clicked */}
        {page}
        {/* containing footer */}
        {/* ------------------------------------- FOOTER ------------------------------------ */}
        <div id="footer">
          {/* footer title */}
          <h2 id="footer-title">Contact:</h2>
          <div id="contact-info">
            {/* clickable links that bring you to my linkedIn, instagram, and my printed email */}
            <a href="https://www.linkedin.com/in/hope-swanke-aa653b112/" target="_blank"><h3 class="footer-info" >LinkedIn</h3></a>
            <a href="https://www.instagram.com/hopeswanke/" target="_blank"><h3 class="footer-info" >Instagram</h3></a>
            <h3 class="footer-info" >hopeswanke@gmail.com</h3>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
