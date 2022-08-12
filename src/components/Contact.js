import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
init(process.env.ID)

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const formMessage = document.querySelector(".form-message");
  
      emailjs.sendForm('service_f4o6b7e', 'template_nllk0ta', form.current, process.env.REACT_APP_ID)
        .then((result) => {
          //   console.log(result.text);
            form.current.reset();
            formMessage.innerHTML = "<p class='success'> Message envoyé ! </p>";
            setTimeout(() => {formMessage.innerHTML=""}, 5000)
        }, (error) => {
          //   console.log(error.text);
            formMessage.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer. </p>";
            setTimeout(() => {formMessage.innerHTML=""}, 5000)
        });
    };
  
    return (
        <div id="contact">
          <h2>contactez-moi</h2>
          <form ref={form} onSubmit={sendEmail} >
              <label>nom</label>
              <input type="text" name="name" required id="name"/>
              <label>Email</label>
              <input type="email" name="email" required id="email"/>
              <label>Message</label>
              <textarea name="message" id="mess"/>
              <button type="submit" value="Send" className="btn-red">envoyer</button>
          </form>
          <div className="form-message">
  
          </div>
      </div>
    );
  };

export default Contact;