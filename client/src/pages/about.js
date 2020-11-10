// global imports
import React from "react";
// css import
import "./App.css";

function AboutMe() {
  return (
    // containing div
    <div id="body">
      {/* list of facts about me  */}
      <h1 id="about-title">Somethings About Me!</h1>
      <h3 class="facts">I am born and raised in Vermont</h3>
      <h3 class="facts">I have a cat named Steve</h3>
      <h3 class="facts">
        My family goes to Green Bay for a game almost every year
      </h3>
      <h3 class="facts">Thanksgiving is my favorite holiday</h3>
    </div>
  );
}

export default AboutMe;
