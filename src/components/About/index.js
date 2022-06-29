import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  // small screens side info box teggle
  let [toggled, setToggled] = React.useState(false) 

  function toggle(){
    if(toggled){
      document.querySelector('.my-info').style.left = "0px"
      document.querySelector(".toggleBtn").style.transform = "rotate(180deg)"
      document.querySelector('.q-section').style.filter = 'blur(8px)'

    }else{
      document.querySelector('.my-info').style.left = "-285px"
      document.querySelector(".toggleBtn").style.transform = "rotate(0deg)"
      document.querySelector('.q-section').style.filter = 'blur(0px)'
    }
    setToggled(prev => !prev)
  }

  // onScroll animation
window.addEventListener("scroll",() =>  {
  let aboutSection = document.querySelector(".about")
  let questions = document.querySelectorAll(".q")
  if (window.scrollY >= aboutSection.offsetTop - (aboutSection.offsetTop / 1.5)) {
  document.querySelector(".my-info").style.animation = "fadeIn 1s forwards"
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.animation = `fadeInUp 1s ${i / 3}s forwards`
  }
  document.querySelector(".about .head").style.animation = "fadeInDown 1s forwards"
  document.querySelector(".about .sub-head").style.animation = "fadeInDown 1s 0.3s forwards"

  }
})


  
  return (
    <>
    <div className="container about" id="about">
      <div className="main-header">
      <p className="head">About Me</p>
      <p className="sub-head">Who is Abdullrahman?</p>
      </div>
      <div className="my-info">
        <div className="toggleSlide" onClick={toggle}>
          <p>Personnal info</p>
          <div className="toggleBtn"><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <ul className="q-list">
          <li className="q-box">
            <p className="question">Who Are You ?</p>
            <p className="answer">my name is Abdullrahman Al-Abead, an Information technology Student</p>
          </li>
          <li className="q-box">
          <p className="question">Where Are You From ?</p>
          <p className="answer">Damascus/ Syria</p>
          </li>
          <li className="q-box">
          <p className="question">Where Are You studying ?</p>
          <p className="answer">In the Syrian Virtual Univirsity</p>
          </li>
          <li className="q-box">
          <p className="question">What is Your interests ?</p>
          <p className="answer">Sports, Reading, & a Good Challenge</p>
          </li>
        </ul>
      </div>
      <div className="q-section">
      <div className="q">
        <p className="bQuestion">How did you start Learning Web Development ?</p>
        <p className="bAnswer">A year ago, I finished HighSchool, then I started to learn various things, such as: 'Graphic Design', 'Content Writing', 'Translation', when I came across the world of programming and web development I was immediately hooked. I loved the idea of problem solving and planning to get the computer to do whatever you want, and from Then, I started my career as a web developer.</p>
        </div>
      <div className="q">
        <p className="bQuestion">tell me more about yourself ?</p>
        <p className="bAnswer">I see myself as well-disciplined, and a responsible person, tell me what to do, and I'll figure out how to do it. I would also say that I am very competitive and passionate about what I do.</p>
        </div>
      <div className="q">
        <p className="bQuestion">Where Do You See Yourself In 5 Years ?</p>
        <p className="bAnswer">one of the goals that i wanna achieve in the next 5 years regarding my career is to become a leader of a development team and to gain a new project management skills within my position as a web Developer, since I’ve always enjoyed leadership in my career.</p>
        </div>
      
      </div>
      
    </div>
    </>
    )
}
