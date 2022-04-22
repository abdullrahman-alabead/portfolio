import "./index.scss";
import Elzero from "../../assets/images/Elzero-Template.png";
import ToDo from "../../assets/images/Todo-List.png";
import Chain from "../../assets/images/Chain-Template.png";
import Shoes from "../../assets/images/Shoes-Slider.png";
import Meal from '../../assets/images/Meal-Gen.png'
import Chat from '../../assets/images/Chat-App.png'

export default function Projects() {
  return (
    <div className="container projects">
      <div className="main-header">
        <p className="head">Projects</p>
        <p className="sub-head">What did you do?</p>
      </div>
      <div className="projects-boxes">
        <a
          href="https://whitefocus.github.io/Simple-To-Do-List/"
          target="_blank"
        >
          <div className="box">
            <img src={ToDo} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">A Simple To-DO List</h3>
                <p>
                  a To-Do List using Local Storage, You Can add,remove,and check
                  Tasks
                </p>
                <a
                  href="https://github.com/whitefocus/Simple-To-Do-List"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/Simple-Chat-App/"
          target="_blank"
        >
          <div className="box">
            <img src={Chat} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name vpn-required">Chat-App</h3>
                <p>
                  a Chat-App using React, Sass, and Firebase
                </p>
                <a
                  href="https://github.com/whitefocus/Simple-Chat-App"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/Elzero-Template/"
          target="_blank"
        >
          <div className="box">
            <img src={Elzero} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">El-Zero Template</h3>
                <p>an HTML, CSS & JavaScript Template</p>
                <a
                  href="https://github.com/whitefocus/Elzero-Template"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/Chain-Template/"
          target="_blank"
        >
          <div className="box">
            <img src={Chain} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">Chain Template</h3>
                <p>an HTML, CSS & JavaScript Template</p>
                <a
                  href="https://github.com/whitefocus/Chain-Template"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/Shoes-Slider/"
          target="_blank"
        >
          <div className="box">
            <img src={Shoes} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">A Shoes Slider Template</h3>
                <p>a simple Shoes Slider made with JavaScript</p>
                <a
                  href="https://github.com/whitefocus/Shoes-Slider"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/Random-Meal-Generator/"
          target="_blank"
        >
          <div className="box">
            <img src={Meal} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">A Random Meal Generator</h3>
                <p>Generating a new meal using TheMealDb api</p>
                <a
                  href="https://github.com/whitefocus/Random-Meal-Generator"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
