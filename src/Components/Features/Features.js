import React from 'react'
import TabMenu from '../TabMenu/TabMenu'
import './Feature.css'

export default function Features() {

    return (
        <div className='feature-container'>
            <div className='feature'>
                <h2 className='sectionTitle'>Features</h2>
                <p className='gray-text'>Our aims is to make it quick and easy for you to access
                    your favorite websites. Your bookmarks syncs between your devices
                    so you can access them on the go.
                </p>
            </div>
            <TabMenu />
        </div>
    )
}
