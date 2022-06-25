import "./index.scss"
import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header>
      <div className="logo">A</div>
      <nav>
        <ul className="nav-links">
          <li className="link"><a href="#about"><span>I.</span> About</a></li>
          <li className="link"><a href="#skills"><span>II.</span> Skills</a></li>
          <li className="link"><a href="#projects"><span>III.</span> Projects</a></li>
          <li className="link"><a href="#contact"><span>IV.</span> Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}