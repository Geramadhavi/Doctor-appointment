import './index.css'
import React from 'react'

const Footer = () => (
  <nav className="nav-footer">
    <div className="nav-footer">
      <div className='nav-footer-first'>
        <img
            className="footer-website-logo"
            src="nav-footer.png"
            alt="website logo"
        />
        <p className='nav-footer-first-para'>Copyright © 2023 eka.care</p>
      </div>
      
      <ul className='footer-container'>
        <li className='footer-container-list'><a href="/">Home</a></li>
        <li className='footer-container-list'><a href="/">Terms and Conditions</a></li>
        <li className='footer-container-list'><a href='/'>Privacy Policy</a></li>
        <li className='footer-container-list'><a href='/'>Security</a></li>
      </ul>
      
    </div>
  </nav>
)
export default Footer
