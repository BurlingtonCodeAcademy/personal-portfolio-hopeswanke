// global imports
import React from "react";
// css imports
import "./App.css";

function Wander() {
  return (
    // containing div
    <div id="body">
      {/* header */}
      <h1 id="wander-title">My Everlasting Wanderlust</h1>
      {/* containing div for pictures and their caption */}
      <div id="stories">
        {/* containing div for first three photos */}
        <div id="stories123">
          <div>
            <img
              class="stories-photo"
              src="../images/ireland/ireland-twirl.jpg"
            />
            <h2 class="caption">Galway, Ireland</h2>
          </div>
          <div>
            <img class="stories-photo" src="../images/france/nice-ocean.jpg" />
            <h2 class="caption">Nice, France</h2>
          </div>
          <div>
            <img class="stories-photo" src="../images/italy/rome-stairs.jpg" />
            <h2 class="caption">Rome, Italy</h2>
          </div>
        </div>
        {/* containing div for second three photos */}
        <div id="stories456">
          <div>
            <img class="stories-photo" src="../images/spain/lukas.jpg" />
            <h2 class="caption">Tarragona, Spain</h2>
          </div>
          <div>
            <img
              class="stories-photo"
              src="../images/germany/dortmund-view.jpg"
            />
            <h2 class="caption">Duesseldorf, Germany</h2>
          </div>
          <div>
            <img class="stories-photo" src="../images/sweden/boat.jpg" />
            <h2 class="caption">Arjang, Sweden</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wander;
