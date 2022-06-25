import { Link } from "react-router-dom";
import "./index.scss";
import "animate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Landing() {
let [toggled, setToggled] = React.useState(false) 

function toggle(e){
  if(toggled){
    document.querySelector('.project-info').style.bottom = "0px"
    document.querySelector(".toggleBtn").style.transform = "rotate(180deg)"
  }else{
    document.querySelector('.project-info').style.bottom = "-285px"
    document.querySelector(".toggleBtn").style.transform = "rotate(0deg)"
  }
  setToggled(prev => !prev)
}

  return (
    <div className="landing container">
      
      <div className="project-info">
        <div className="btn"  onClick={toggle}>
        <div className="toggleBtn"><FontAwesomeIcon icon={faArrowUp} /></div>
        <p className="info-header">This Project was built with</p>
        </div>
          <ul>
            <li><p>-HTML</p></li>
            <li><p>-CSS</p></li>
            <li><p>-JavaScript</p></li>
            <li><p>-React (& React Router v6)</p></li>
            <li ><p className="depend">Dependincies</p></li>
            <li><p>-emailJs</p></li>
            <li><p>-animate.js</p></li>
            <li><p>-Fontawesome</p></li>
          </ul>
        
      </div>
      <p className="name">This Is Abdullrahman</p>
      <p className="job">a Front-End Developer</p>
      <a href="#about">Click Here To Continue</a>
    </div>
    )
}
