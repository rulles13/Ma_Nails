import React from 'react';
import { useState } from 'react';

const Contact = () => {
  
  const [form, setForm] = useState({
    name: '',
    email:'',
    message:''

  })

  const onChange = (e) => {
    const {value, name} = e.target;
    setForm((state) => ({
      ...state,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div id="contact">
      <h2>CONTACT</h2>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Nom</label>
        <input onChange={onChange} type="text" name="name" default="Jane Doe" required tabIndex="1"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={onChange}  type="email" name="email" required tabIndex="2"/>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea onChange={onChange} name="message" required rows="5" tabIndex="3"/>
      </div>
      <button type="submit" className='btn-red'>Envoyer</button>
    </form>
    </div>
  )
}

export default Contact