import React from 'react'
import image from './illustration-features-tab-2.svg'
import './TabComponents.css'

export default function Simple() {
    return (
        <div className='wrapper'>
          <div className='image-container'>
            <div className='figure2'></div>
            <img src={image} alt='pc' className='imageTab'/>
          </div>
          <div className='text-wrapper'>
            <h2>Intelligent search</h2>
            <p className='gray-text'>Our powerful search feature will help saved
                sites in no time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className='infoButton'>More info</button>
          </div>
        </div>
    )
}
