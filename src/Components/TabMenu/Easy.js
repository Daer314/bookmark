import React from 'react'
import easy from './illustration-features-tab-3.svg'
import './TabComponents.css'

export default function Simple() {
    return (
        <div className='wrapper'>
          <div className='image-container'>
            <div className='figure2'></div>
            <img src={easy} alt='pc' className='imageTab'/>
          </div>
          <div className='text-wrapper'>
            <h2>Share your bookmarks</h2>
            <p className='gray-text'>Easily share your bookmarks and collections with
            others. Create a shareable  link that you can send at the click of a button.
            </p>
            <button className='infoButton'>More info</button>
          </div>
        </div>
    )
}
