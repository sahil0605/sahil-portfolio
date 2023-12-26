import React from 'react'
import { Form } from 'react-router-dom'
import './Contact.css'
import linkedin from './linkedin.png'
import X from './twitter.avif'
function Contact() {
  return (
    <div id='contact'>
        <div className='contact'>
        <h1>Contact</h1>
        <div className='form'>
            <input type='email' placeholder='E-mail'></input>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='message'></input>
            <button>Send message</button>
        </div>
        </div>
        
        <div className='linkedin'>
            <a href='https://www.linkedin.com/in/sahilsinghsolanki/' target='_blank'>
                <img  src={linkedin}></img>
            </a>
            <a href='https://twitter.com/sahil06_rajput' target='_blank'>
                <img src={X}></img>
            </a>
        
        </div>
       
    </div>
  )
}

export default Contact