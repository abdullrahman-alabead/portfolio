import "./index.scss";
import Elzero from "../../assets/images/Elzero-Template.png";
import ToDo from "../../assets/images/Todo-List.png";
import Chain from "../../assets/images/Chain-Template.png";
import Shoes from "../../assets/images/Shoes-Slider.png";

export default function Projects() {
  return (
    <div className="container projects">
      <div className="main-header">
        <p className="head">Projects</p>
        <p className="sub-head">What did you do?</p>
      </div>
      <div className="projects-boxes">
        <a
          href="https://whitefocus.github.io/NolanWhitesProject-1/"
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
                  href="https://github.com/whitefocus/NolanWhitesProject-1"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/NolanWhitesProject-2/"
          target="_blank"
        >
          <div className="box">
            <img src={Elzero} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">El-Zero Template</h3>
                <p>an HTML, CSS & JavaScript Template</p>
                <a
                  href="https://github.com/whitefocus/NolanWhitesProject-2"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/NolanWhitesProject-3/"
          target="_blank"
        >
          <div className="box">
            <img src={Chain} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">Chain Template</h3>
                <p>an HTML, CSS & JavaScript Template</p>
                <a
                  href="https://github.com/whitefocus/NolanWhitesProject-3"
                  target="blank"
                >
                  Code Files
                </a>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://whitefocus.github.io/NolanWhitesProject-4/"
          target="_blank"
        >
          <div className="box">
            <img src={Shoes} />
            <div className="info-box">
              <div className="project-info">
                <h3 className="project-name">A Shoes Slider Template</h3>
                <p>a simple Shoes Slider made with JavaScript</p>
                <a
                  href="https://github.com/whitefocus/NolanWhitesProject-4"
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
