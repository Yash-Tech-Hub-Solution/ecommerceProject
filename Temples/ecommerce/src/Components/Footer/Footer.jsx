import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/shopping-bag.png'
import instagram_icon from '../Assets/instagram.png'
import pinterest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>GeniusMart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2025 - All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
