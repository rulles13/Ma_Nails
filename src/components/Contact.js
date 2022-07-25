import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState ("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    setStatus("Submit");
  };

  return (
    <div id="contact">
      <h2>CONTACT</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" required tabIndex="1"/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required tabIndex="2"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required tabIndex="3"/>
      </div>
      <button type="submit" className='btn-red'>{status}</button>
    </form>
    </div>
  )
}

export default Contact