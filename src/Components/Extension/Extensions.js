import React from 'react'
import chrome from './logo-chrome.svg'
import firefox from './logo-firefox.svg'
import opera from './logo-opera.svg'
import './Extension.css'

export default function Extensions() {
    return (
        <div className='extension-container'>
            <div className='extension'>
                <h2>Download the extension</h2>
                <p className='gray-text'>We've got more browsers in the pipeline. Please
                    do let us know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>
            <div className='cards-container'>
                <div className='card'>
                    <img src={chrome} alt='chrome'/>
                    <h4 className='extTitle'>Add to Chrome</h4>
                    <div className='version'>
                        <p className='extText'>Minimum version 62</p>
                    </div>
                    <button className='extButton'>Add & Install Extension</button>
                </div>
                <div className='card firefox'>
                    <img src={firefox} alt='firefox'/>
                    <h4 className='extTitle'>Add to Chrome</h4>
                    <div className='version'>
                        <p className='extText'>Minimum version 62</p>
                    </div>
                    <button className='extButton'>Add & Install Extension</button>
                </div>
                <div className='card opera'>
                    <img src={opera} alt='opera'/>
                    <h4 className='extTitle'>Add to Chrome</h4>
                    <div className='version'>
                        <p className='extText'>Minimum version 62</p>
                    </div>
                    <button className='extButton'>Add & Install Extension</button>
                </div>
            </div>
        </div>
    )
}
