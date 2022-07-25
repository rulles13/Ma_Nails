import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';

export default function Header() {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
      setOpen(false)
    }

    const SideBarLinks = ({ closeSideBar }) => {
        return (
          <>
            <li><a href="#hero" onClick={closeSideBar}>top</a></li>
            <li><a href="#realisations" onClick={closeSideBar}>réalisations</a></li>
            <li><a href="#tarif" onClick={closeSideBar}>tarif</a></li>
            <li><a href="#contact" onClick={closeSideBar}>contact</a></li>
          </>)}


    return (
        <div id='hero'>
            <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
                <SideBarLinks closeSideBar={closeSideBar} />
            </Menu>
            <div className="logo-hero">
                <img src="./img/logoMaNails_brown.svg" alt="logo MA NAILS"/>
            </div>
            
        </div>
      )

}
