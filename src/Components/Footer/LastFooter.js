import React from 'react'
import bookmark from './logo-bookmark.svg'
import fb from './icon-facebook.svg'
import tw from './icon-twitter.svg'
import './LastFooter.css'

export default function LastFooter() {
    return (
        <div className='lastFooter'>
            <img src={bookmark} alt='bookmark' className='logoBookmark' />
            <ul className='lastFooterList'>
                <li>
                    <a 
                        href='#features'
                        className='footerLink'
                        >FEATURES
                    </a>
                </li>
                <li>
                    <a 
                        href='#features'
                        className='footerLink'
                        >PRICING
                    </a>
                </li>
                <li>
                    <a 
                        href='#features'
                        className='footerLink'
                        >CONTACT
                    </a>
                </li>
            </ul>
            <div className='iconsWrapper'>
                <img src={fb} alt='facebook' className='social'/>
                <img src={tw} alt='twitter' className='social'/>
            </div>
        </div>
    )
}
