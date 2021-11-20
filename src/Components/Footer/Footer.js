import React from 'react'
import LastFooter from './LastFooter'
import './Footer.css'

export default function Footer() {

    return (
        <div className='footerWrapper'>
            <div className='footer-container'>
                <p className='join'>35,000+ ALREADY JOINED</p>
                <h1 className='footer-title'>Stay up-to-date with what we're doing</h1>
                <form className='input-container'>
                    <input
                        onInvalid="this.setCustomValidity('Please Enter valid email')"
                        oninput="setCustomValidity('')"
                        required
                        type='email'
                        className='inputField'
                        placeholder='Enter your email address'  />
                    <button className='footerButton'>Contact Us</button>
                </form>
            </div>
            <LastFooter/>
        </div>
    )
}
