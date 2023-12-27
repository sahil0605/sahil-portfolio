// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import linkedin from './linkedin.png';
import X from './twitter.avif';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Include email and name in the formData object
    const emailData = {
      ...formData,
      user_email: formData.email,
      user_name: formData.name,
    };

    emailjs
      .sendForm('service_4jdrat6', 'template_d27s1o4', e.target, 'RMouZRW95lHMe_2Nq')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Error sending message. Please try again later.');
        }
      );
  };

  return (
    <div id='contact'>
      <div className='contact'>
        <h1>Contact</h1>
        <div >
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='message'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type='submit'>Send message</button>
          </form>
        </div>
      </div>

      <div className='linkedin'>
        <a href='https://www.linkedin.com/in/sahilsinghsolanki/' target='_blank' rel='noopener noreferrer'>
          <img src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://twitter.com/sahil06_rajput' target='_blank' rel='noopener noreferrer'>
          <img src={X} alt='Twitter' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
