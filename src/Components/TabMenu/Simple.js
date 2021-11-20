import React from 'react'
import pc2 from './illustration-features-tab-1.svg'
import './TabComponents.css'

export default function Simple() {
    return (
        <div className='wrapper'>
          <div className='image-container'>
            <div className='figure2'></div>
            <img src={pc2} alt='pc' className='feature-image'/>
          </div>
          <div className='text-wrapper'>
            <h2>Bookmarks in one click</h2>
            <p className='gray-text'>Organize your bookmarks however you like. Our
                simple drag-and-drop interface gives you complete
                control over how you manage your favorite sites.
            </p>
            <button className='infoButton'>More info</button>
          </div>
        </div>
    )
}
