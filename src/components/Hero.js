import React from 'react'
import { bubble as Menu } from 'react-burger-menu';

export default function Hero() {
  return (
    <div className='hero'>
        <div className="logo-hero">
            <img src="./background_400_1920.jpg" alt="logo" />
            <img src="./logo192.png" alt="logo" />
        </div>
        <Menu right>
            <li>test</li>
            <li>hello</li>
        </Menu>
    </div>
  )
}
