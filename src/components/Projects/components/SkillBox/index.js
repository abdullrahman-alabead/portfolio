import './index.scss'

export default function SkillBox(props) {
  let {name, id, icon, category, livelink, codelink,backgroundColor, textColor, changeProject} = props
  function activate(e) {
    let boxes = document.querySelectorAll(".project-box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("active")
    }
    e.target.classList.add("active")
  }
  return (
    <div className="project-box" style={{backgroundColor: "#fda50f", cursor: "pointer"}} onClick={(e) => {changeProject(id-1); activate(e)}}>
            <p className="project-icon" style={{color: "white"}}>{icon}</p>
            <p className="project-title" style={{color: "#0a192f"}}>{category}</p>
          </div>
  )
}