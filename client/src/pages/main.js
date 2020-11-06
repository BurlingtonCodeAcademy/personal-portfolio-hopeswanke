import React from "react";
import {useState} from "react";

function MainPage() {
  
  return (
    <div>
    <h3 id="subtitle">Welcome to my Page, I am a 23 year old who loves to travel, loves her cat Steve, and hopes to be a Web Developer</h3>
      <div id="pic-content">
        <div><img class="main-photos" src="../images/alice.jpg" /><h2 class="main-caption">My friend Alice and I in Liverpool, England</h2></div>
        <div><img class="main-photos" src="../images/italy/good-mountain.jpg" /><h2 class="main-caption">Skiing in the Italian Alps</h2></div>
        <div><img class="main-photos" src="../images/france/scuba-gear.JPG" /><h2 class="main-caption">Scuba diving of the coast of France</h2></div>
        <div><img class="main-photos" src="../images/kittybed.jpg" />
        <h2 class="main-caption">My Beloved Steve</h2></div>
      </div>
    </div>
  );
}

export default MainPage
