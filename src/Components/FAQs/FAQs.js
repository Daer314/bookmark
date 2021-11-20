import React from 'react'
import arrow from './icon-arrow.svg'
import './FAQs.css'

export default function FAQs() {

    return (
        <div className='questionsWrapper'>
            <div className='question'>
                <p className='activeQuestion'>What is bookmark?</p>
                <img src={arrow} alt='arrow'/>
            </div>
            <div className='question'>
                <p 
                    className='activeQuestion'>How can I request a new browser?                    
                </p>
                <img src={arrow} alt='arrow'/>
            </div>
            <div className='question'>
                <p className='activeQuestion'>Is there a mobile app?</p>
                <img src={arrow} alt='arrow'/>
            </div>
            <div className='question lastQuestion'>
                <p className='activeQuestion'>What about chromium browsers</p>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
    )
}
