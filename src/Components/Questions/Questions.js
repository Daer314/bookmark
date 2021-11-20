import React from 'react'
import FAQs from '../FAQs/FAQs'
import './Questions.css'

export default function Questions() {
    return (
        <div className='questions-container'>
            <div className='questions'>
                <h2>Frequently Asqued Questions</h2>
                <p className='gray-text'>Here are some of your FAQs. If you have any other questions you'd like
                    answered please feel free to email us.
                </p>
            </div>
            <FAQs/>
            <button className='infoButton'>More info</button>
        </div>
    )
}
