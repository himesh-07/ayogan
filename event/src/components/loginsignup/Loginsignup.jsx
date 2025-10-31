import React from 'react'
import './Loginsignup.css'
import { Link } from "react-router-dom";

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const Loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">WELCOME</div>
        <div className="underline"></div>
      </div>

      <div className="card">


        
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder="Full name" />
          </div>
          
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input type="email" placeholder="Email address" />
          </div>

          <div className="input">
            <img src={password_icon} alt="password icon" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="forgot-password">forgot password ?<span>click here</span></div>

          <div className="submit-container">
            <button className="submit">sign up</button>
            <button className="submit secondary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
