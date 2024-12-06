import React from 'react'
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__top">
        <div className="footer__top_left">
            <h1>Ousmane</h1>
            <p>I am a FullStack developer from, Dakar with 1 year of experiance in companies like IAT and Sonatel.</p>
        </div>
            <div className="footer__top_right">
                <div className="footer__email__input">
                <i className="uil uil-user nav__icon"></i>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className='footer__send'>Send</div>
            </div>
            <hr />
            <div className="footer__button">
                <p className="footer__button__left">@ 2024 Yaou souley Ousmane. All rights</p>
                <div className="footer__button__righ">
                    <p>Term of service</p>
                    <p>available for a contract</p>
                    <p>Available for an internship</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
