import React from 'react'
import './FooterLinks.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { logo } from '../header/Header'

const FooterLinks = () => {
  return (
    <>
    <div className='contact-section'>
        <div className='container contact'>
            <div className="contact-icon">
                <FaFacebookF className='i'/>
                <FaTwitter className='i'/>
                <FaInstagram className='i'/>
                <FaYoutube className='i'/>
            </div>
            <h2>Let's Talk?</h2>
            <a href="#home" className='btn btn-dark'>Make an enquiry!</a>
        </div>
    </div>
    <div className="footer-section">
        <div className="container footer">
            <div className="footer-logo">
                {logo}
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Features
                </p>
                <ul className="nav-ul footer-links">
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Brand Links</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blog</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                Resources
                </p>
                <ul className="nav-ul footer-links">
                    <li><a href="#home">svd</a></li>
                    <li><a href="#home">Brand Links</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blog</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Company
                </p>
                <ul className="nav-ul footer-links">
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Brand Links</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blog</a></li>
                </ul>
            </div>
            <div className="footer-menu">
                <p className="link-heading">
                    Partners
                </p>
                <ul className="nav-ul footer-links">
                    <li><a href="#home">Link Shortening</a></li>
                    <li><a href="#home">Brand Links</a></li>
                    <li><a href="#home">Analytics</a></li>
                    <li><a href="#home">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterLinks