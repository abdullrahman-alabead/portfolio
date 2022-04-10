import "./index.scss";
import emailjs from "@emailjs/browser"
import { useRef } from "react";

export default function Contact() {
let refForm = useRef()

function sendEmail(e){
  e.preventDefault()
  emailjs.sendForm('service_shn9e7s','template_ptrk8lr',refForm.current,'IaMhAaPCt40gzm4_i'
    ).then(() => {alert("message sent succesfully"); window.location.relode(false)},
    ()=> {alert("there was a problame sending your message")})
}

  return (
    <div className="contact container">
      <div className="main-header">
        <p className="head">Contact Me</p>
        <p className="sub-head">Say Hello!</p>
      </div>
      <div className="contact-page">
        <div className="form-area">
            <form ref={refForm} onSubmit={sendEmail}> 
          <div className="form-fields">
            <p className="form-p">It's Going To Be a pleasure Hearing from you</p>
            <div className="name-email">
              <input type="text" name="name" placeholder="Name..." required />
              <input
                type="email"
                name="email"
                placeholder="Email..."
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              required
            />
            <textarea
              name="message"
              placeholder="What's the message ?"
              required
            />
            <button className="send-button">SEND</button>
          </div>
            </form>
        </div>
        <div className="quotes">
          <p className="quotes-head">“Quotes”</p>
          <p className="quote" >“It's not who you are underneath, it's what you do that defines you”</p>
          <p className="quote" data-name="-Mark Twin">“Action speaks louder than words but not nearly as often”</p>
          <p className="quote" >“What you do is what matters, not what you think or say or plan”</p>
          <p className="quote" data-name="-Jordan Peterson">“If you are not willing to be a fool, you can't become a master”</p>
        </div>
      </div>
    </div>
  );
}
