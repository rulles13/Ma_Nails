import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

export default function Header() {
    return (
        <div className='hero'>
            <Menu right>
                <li>test</li>
                <li>hello</li>
            </Menu>
            <div className="logo-hero">
                <img src="./img/logoMaNails_brown.svg" alt="logo MA NAILS"/>
            </div>
            
        </div>
      )

}
