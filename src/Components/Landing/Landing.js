import React from 'react'
import pc from './illustration-hero.svg'
import './Landing.css'

export default function Landing() {
    return (
        <div className='landing-container'>
            <div className='text-container'>
                <h1>A Simple Bookmark Manager</h1>
                <p className='gray-text'>A clean and simple interface to organize your favorite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <div>
                    <button className='buttons'>Get it on Chrome</button>
                    <button className='white-button'>Get it on Firefox</button>
                </div>
            </div>
            <div className='img-container'>
                <img src={pc} alt='pc' className='landing-image'/>
                <div className='figure'></div>
            </div>
        </div>
    )
}
