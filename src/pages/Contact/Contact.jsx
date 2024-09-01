import React from 'react'
import './Contact.scss'

import Lottie from 'lottie-react';
import contact from '../../assets/contact.json'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-heading">
        <div className="contact-heading-img-div">
          <Lottie className="contact-img" animationData={contact} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="contact-heading-text-div">
          <div className="contact-heading-text">
            <h1>Contact me</h1>
          </div>
          <p className="contact-header-detail-text">
            You can contact me at the places mentioned below. I will try to get back to you as fast as I can.
          </p>
          <div className="social-media">
            <ul>
              <li><a href="https://github.com/rakshithr0177"><img src="/icons/github.png" /></a></li>
              <li><a href="https://www.linkedin.com/in/rakshith-r-042203225/"><img src="/icons/linkedin.png" /></a></li>
              <li><a href="mailto:rakshithr0177@gmail.com"><img src="/icons/gmail.png" /></a></li>
              <li><a href="https://www.reddit.com/user/Alternative_Fail2660/"><img src="/icons/redit.png" /></a></li>
            </ul></div>
        </div>
      </div>

      <div className="contact-body">
        <div className="find-me">
          <div className="find-me-header">
            <h1>Find me</h1>
          </div>
          <div className="find-me-content">
            <p>You can also find me here as well</p>
            <div className="find-me-links">
              <ul>
                <li><a href="https://leetcode.com/u/RakshithR/"><img src="/icons/leetcode.png" /></a>
                </li>
                <li><a href="https://auth.geeksforgeeks.org/user/rakshithr0177/practice"><img src="/icons/geeksforgeeks.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
