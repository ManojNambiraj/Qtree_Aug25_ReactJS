import React from "react";
import "./Newbtn.css"

function Newbtn(props){   
    return (
      <div className="main">
        <button style={{ backgroundColor: props.btnColor, color: "white" }}>{props.btnName}</button>
      </div>
    );
}

export default Newbtn;