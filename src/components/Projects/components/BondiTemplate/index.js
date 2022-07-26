import "./index.scss"
import bondi from '../../../../assets/images/bondi.png'

export default function BootstrapPreview() {
  return (
    <div className="preview-box bootstrap-preview">
      <div className="project-name">Bondi</div>
      <img src={bondi} />
      <div className="links">
        <a href="https://github.com/abdullrahman-alabead/bondi">Code</a>
        <a href="https://abdullrahman-alabead.github.io/bondi/">Live</a>
      </div>
    </div>
  )
}