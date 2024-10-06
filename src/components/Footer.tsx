"use client";

import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="container__footer">
            <div className="content__footer">
                <div className="footer__jllc">
                    <div className="footer__jllc-item">
                        
                        <h2>JLLC</h2>
                    </div>
                    
                </div>
                <div className="legal">
                    <h4>Legales</h4>
                    <p>Privacy Policy</p>
                    <p>Terms and conditions</p>
                    <p>Cookies Policy</p>
                    <p>Contract terms and conditions policy</p>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <div className="contact__item">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>+52 998 486 9828</p>

                    </div>
                    <div className="contact__item">
                        <i className="fa-solid fa-envelope"></i>
                        <p>info@jllc.com</p>
                        
                    </div>
                    <div className="contact__item">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Cancún Quintana Roo, México</p>
                        
                    </div>

                </div>
                <div className="social__networks">
                    <h4>Social networks</h4>
                    <div className="social__networks-item">
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
            <div className="final__foot">
                <div>
                    <h5>JLLC DESING & WEB DEVELOPMENT</h5>
                    <small>JLLC © 2023. All rights reserved.</small>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
