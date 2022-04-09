import "./index.scss";
import { Link } from "react-router-dom";

export default function About() {


  return (
    <>
    <div className="container about">
      <div className="main-header">
      <p className="head">About Me</p>
      <p className="sub-head">Who is Nolan?</p>
      </div>
      <div className="my-info">
        <ul className="q-list">
          <li className="q-box">
            <p className="question">Who Are You ?</p>
            <p className="answer">my name is Nolan White, an Information technology Student</p>
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
