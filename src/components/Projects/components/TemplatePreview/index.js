import './index.scss'
import Img from '../../../../assets/images/landing-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowDownShortWide, faArrowDownZA, faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function TemplatePreview() {
  return (
    <div className='preview-box template-preview'>
      <div className='project-name'>Elzero</div>
      <div className='header'>
        <p className='logo'>El-zero</p>
          <ul className='links'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About</li>
            <li className='nav-link code-links'>
              <p>Links</p>
              <div className='links-container' style={{cursor: "default"}}>
              <div className='link'> <a href='https://github.com/abdullrahman-alabead/Elzero-Template' target="_blank">Code</a> </div>
              <div className='link'><a href='https://abdullrahman-alabead.github.io/Elzero-Template/ ' target="_blank">live</a> </div>
              </div>
              
            </li>
          </ul>
          
      </div>
      <div className='page'>
            <p className='desc'>This is Elzero Template</p>
            <img src={Img} />
            <FontAwesomeIcon icon={faArrowUp}  />
      </div>

      
    </div>
  )
}