import { Link } from "react-router-dom";
import "./index.scss";
import "animate.css"

export default function Landing() {
  return (
    <div className="landing">
      
      <div className="project-info">
        <p className="info-header">This Project was built with:</p>
          <ul>
            <li><p>-HTML</p></li>
            <li><p>-CSS</p></li>
            <li><p>-JavaScript</p></li>
            <li><p>-React (& React Router v6)</p></li>
            <li ><p className="depend">Dependincies:</p></li>
            <li><p>-emailJs</p></li>
            <li><p>-animate.js</p></li>
            <li><p>-Fontawesome</p></li>
          </ul>
        
      </div>
      <p className="name">This Is Nolan</p>
      <p className="job">a Front-End Developer</p>
      <Link to="/about">Click Here To Continue</Link>
    </div>
    )
}
