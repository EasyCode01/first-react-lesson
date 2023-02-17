import React from 'react'
import { useState } from 'react';
import Button from './Button';
import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const aboutUs = [{id:1, list:'How it works'}, {id:2, list:'Testimonials'}, {id:3, list:'Careers'}, 
    {id:4, list:'Investors'}, {id:5, list:'Terms of Service'},];

    const contactUs = [{id:1, list:'Contact'}, {id:2, list:'Support'}, {id:3, list:'Destination'},
    {id:4, list:'Sponsorships'}];

    const videos = [{id:1, list:'Submit videos'}, {id:2, list:'Ambassadors'}, {id:3, list:'Agency'}, {id:4, list:'Influencer'},];
    
    const socialMedia = [{id:1, list:'Instagram'}, {id:2, list:'Facebook'}, {id:3, list:'Youtube'},
    {id:4, list:'Twitter'},];

  return (
    <div className='footer'>
        <div className="footer-head">
            <p className="title">Join The Adventure newsletter to receive our
             best vacation deals</p>
             <p className="text">You can unsubscribe at anytime</p>
             <div className="footer-head-search">
                <input
                value = { email }
                onChange = { handleSubmit }
                placeholder='Your Email' type="email" name="email" 
                id="email" 
                />
                <Button label = 'Subscribe' buttonStyle='btn--primary' buttonSize = 'btn--medium'/>
             </div>
        </div>
        <div className="footer-body">
            <div className="footer-body-about-us">
                <h3>About Us</h3>
                <ul>
                    {
                        aboutUs.map( about => (
                            <li className='' key = {about.id}>{about.list}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="footer-body-contact-us">
            <h3>Contact Us</h3>
                <ul>
                    {
                        contactUs.map( contact => (
                            <li className='' key = {contact.id}>{contact.list}</li>
                        ))
                    }
                </ul> 
            </div>
            <div className="footer-body-videos">
            <h3>Videos</h3>
                <ul>
                    {
                        videos.map( video => (
                            <li className='' key = {video.id}>{video.list}</li>
                        ))
                    }
                </ul> 
            </div>
            <div className="footer-body-social-media">
            <h3>Social Media</h3>
                <ul>
                    {
                        socialMedia.map( social => (
                            <li className='' key = {social.id}>{social.list}</li>
                        ))
                    }
                </ul> 
            </div>
        </div>
        <div className="footer-base">
            <div className="footer-base-logo">
                <span>EasyCode</span>
                <i className="bi bi-chat-left-text"></i>
            </div>
            <div className="footer-base-copyright">EasyCode@2023</div>
            <div className="footer-base-icons">
                <a href="https://www.facebook.com"><i className='bi bi-facebook'></i></a>
                <a href="https://www.instagram.com"><i className='bi bi-instagram'></i></a>
                <a href="https://www.youtube.com"><i className='bi bi-youtube'></i></a>
                <a href="https://www.twittter.com"><i className='bi bi-twitter'></i></a>
            </div>
       
        </div>
    </div>
  )
}

export default Footer;