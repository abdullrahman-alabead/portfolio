import "./index.scss";
import React from "react";


export default function ApiPreview() {
  let [messages, setMessages] = React.useState([]);
  

  // Sending Messages

  function sendMessage(e) {
    // send when enter is pressed
    if(e.keyCode == 13)
    {

      let text = document.querySelector(".new-message").value;
      document.querySelector(".new-message").value = "";
      // show sent message
      setMessages((prev) => [...prev, <p className="message">{text}</p>]);

      // receive message
      setTimeout(() => {
        // check if the command is valid
          // if not valid:
        if (text.toLowerCase() != 'fetch("links")') {
          // hide the input when receiving a message
          document.querySelector(".new-message").style.opacity= "0"
          setTimeout(() => {document.querySelector(".new-message").style.opacity = "1"}, 2500)
          setMessages((prev) => [
            ...prev,
            <p className="message received" style={{animationTimingFunction: "steps(27, end)"}}>this is not a valid command</p>,
          ]);
          // if valid:
        } else if (text.toLowerCase() == 'fetch("links")') {
          // hide input when receiving a message
          document.querySelector(".new-message").style.opacity= "0"
          setTimeout(() => {document.querySelector(".new-message").style.opacity = "1"}, 5000)
          // send links
          setMessages((prev) => [
            ...prev,
            <p className="message received"  style={{animationTimingFunction: "steps(35, end)"}}>
              <a
                href="https://github.com/abdullrahman-alabead/Random-Meal-Generator"
                target="_blank"
              >
                Press here to go to the source code
              </a>
            </p>,
            <p className="message received" style={{animationTimingFunction: "steps(37, end)", animationDelay: "3s"}}>
              <a
                href="https://abdullrahman-alabead.github.io/Random-Meal-Generator/"
                target="_blank"
              >
                Press here to go to the live preview
              </a>
            </p>,
          ]);
        }
      }, 1500);
    }
    
  }



  return (
    <div className="preview-box api-preview">
      <div className="project-name">Meal Gen</div>
      <p
        className="message received"
        style={{ animationTimingFunction: "steps(37, end)" }}
      >
        type "fetch("links")" to get the links
      </p>
      {messages}
      <input className="new-message" onKeyDown={(e) => sendMessage(e)} />
    </div>
  );
}
