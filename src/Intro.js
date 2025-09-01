import React from "react";
import "./App.css";
import Newbtn from "./Newbtn";

function Intro() {
  return (
    <div className="intro_btns">
      <Newbtn btnName="Books" btnColor="Green" />
      <Newbtn btnName="Music" btnColor="Red" />
      <Newbtn btnName="Sportz" btnColor="Blue" />
      <Newbtn btnName="Movies" btnColor="Violet" />
      <Newbtn btnName="Cars" btnColor="Brown" />
    </div>
  );
}

export default Intro;
