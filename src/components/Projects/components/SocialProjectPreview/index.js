import './index.scss'
import User from '../../../../assets/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function SocialProjectPreview() {

  // adding post interactivity
  // liking
  let liked=false;
  function likePost(e) {
    !liked ? e.target.style.color = "blue": e.target.style.color= "white"
    liked = !liked
  }

  // Show links 
  let showed = false;
  function showLinks() {
    let link1 = document.querySelector('.links div:first-child')
    let link2 = document.querySelector('.links div:last-child')
    if(showed){
      link1.style.opacity = "0"
      link2.style.opacity = "0"
      link1.style.pointerEvents = "none"
      link2.style.pointerEvents = "none"
      showed = false
    } else{
      link1.style.opacity = "1"
      link2.style.opacity = "1"
      link1.style.pointerEvents = "all"
      link2.style.pointerEvents = "all"
      showed = true
    }
  }

  return(
    <div className='preview-box socialmedia-website'>
      <div className='project-name'>The Club</div>
      <img className='user' src={User} />
      <p className='user-name'>Abdullrahman</p>
      <p className='post-text'>
        this is a simple social media website, more features comming soon.<br/>
        you can find the links in the comments
      </p>

      <div className='buttons'>
        <FontAwesomeIcon icon={faThumbsUp} onClick={(e) => likePost(e)}/>
        <FontAwesomeIcon icon={faComment} onClick = {showLinks}/>
      </div>
      <div className='links'>
        <div><a href='https://github.com/abdullrahman-alabead/the-club' target="_blank">Code</a></div>
        <div><a href='https://abdullrahman-alabead.github.io/the-club/' target="_blank">Live</a></div>

      </div>
    </div>
  )
}