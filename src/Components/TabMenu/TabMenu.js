import React, { useState } from 'react'
import Simple from './Simple';
import Speedy from './Speedy'
import Easy from './Easy.js'
import './TabMenu.css'

export default function TabMenu() {

  const [active, setActive] = useState(1);

  const toggle = (number) => setActive(number);

  return (
    <div className='tabs'>
      <div>
        <ul className='tab-Container'>
          <li 
            className={(active === 1)? 'active' : 'tabItem'}
            onClick={() => {
              toggle(1)
            }}>
            <a
              className='tab-link'
              href='#/'>Simple Bookmarking
            </a>
          </li>
          <li 
            className={(active === 2)? 'active' : 'tabItem'}
            onClick={() => {
              toggle(2)
            }}>
            <a 
              className='tab-link'
              href='#/'>Speedy Searching
            </a>
          </li>
          <li 
            className={(active === 3)? 'active' : 'tabItem'}
            onClick={() => {
              toggle(3)
            }}>
            <a
              className='tab-link' 
              href='#/'>Easy Sharing
            </a>
          </li>
        </ul>
      </div>
      {(active===1)? 
        <Simple/>
        : (active===2)? <Speedy/> 
        : (active === 3)? <Easy/>
        : 'Loading'
      }
      <div></div>
    </div>
  )
}
