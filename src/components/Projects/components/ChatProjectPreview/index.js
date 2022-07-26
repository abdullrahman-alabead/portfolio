import './index.scss'
import React from 'react'
import User from '../../../../assets/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons'

export default function ChatProjectPreview() {
  
  // Sending Messages
  let [messages, setMessages] = React.useState([])
  function sendMessage(e) {
    let text = document.querySelector(".new-message").value
    document.querySelector(".new-message").value = ''
    // show sent message
    setMessages(prev => [...prev, <li className='message sent'>{text}</li>])
    // show/hide is typing state
    document.querySelector(".isTyping").style.display = "block"
    setTimeout(() => {
    document.querySelector(".isTyping").style.display = "none"
      // check if the sent test is valid:
        // not valid:
      if (text.toLowerCase() != 'links'){
        setMessages(prev => [...prev, <li className='message received'>I said Links</li>])
        
        // valid
      }else if(text.toLowerCase() == "links"){
      setMessages(prev => [...prev, <li className='message received'>
        <a href="https://github.com/abdullrahman-alabead/Simple-Chat-App" target='_blank'>Code</a>
        </li>,<li className='message received'>
        <a href="https://abdullrahman-alabead.github.io/Simple-Chat-App/" target='_blank'>Live</a>
        </li>])
        
      }
    }, 2500)
    
    
    
    

  }


  return (
    <div className='preview-box chat-website'>
      <div className='project-name'>Chat App</div>

      <div className='header'>
        <img src={User} />
        <p className='user-name'>Abdullrahman</p>
        <p className='isTyping'>Typing...</p>
      </div>
      <ul className='messages'>
        <li className='message received'>This is a Chat App Created by me (as all the projects are)</li>
        <li className='message received'>To Get the links, please send "Links"</li>
        {messages}
      </ul>
      <div className='sendMessage'>
      <input className='new-message' placeholder='new message...'/>
      <FontAwesomeIcon icon={faPaperPlane} className="send-icon" onClick={(e) => sendMessage(e)} />
      </div>
    </div>
  )
}