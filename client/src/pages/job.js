// global imports
import React from "react";
// css imports
import "./App.css";

function Job() {
  return (
    // containing div
    <div id="body">
      {/* header */}
      <h1 id="job-title">Employment Information</h1>
      {/* personal statement  */}
      <h2 id="personal-statement">I hope to work as a web developer using both my creative and logical sides of my brain to develop and create web pages.</h2>
      {/* clickable link to my blog post */}
      <a href="https://www.marketing-partners.com/conversations2/should-your-brand-take-a-stand" target="_blank"><h2 id="blog">My article: <i>Should Your Brand Take a Stand?</i></h2></a>
      {/* resume title and image */}
      <h2 id="resume-title">Resume:</h2>
      <img id="resume-image" src="../images/ResumeReact.jpg" />
    </div>
  );
}

export default Job;
