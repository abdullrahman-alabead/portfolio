import "./index.scss"
import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header>
      <Link to="/"><div className="logo">N</div></Link>
      <nav>
        <ul className="nav-links">
          <li className="link"><Link to="nolan-sPortfolio/about"><span>I.</span> About</Link></li>
          <li className="link"><Link to="nolan-sPortfolio/skills"><span>II.</span> Skills</Link></li>
          <li className="link"><Link to="nolan-sPortfolio/projects"><span>III.</span> Projects</Link></li>
          <li className="link"><Link to="nolan-sPortfolio/contact"><span>IV.</span> Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}