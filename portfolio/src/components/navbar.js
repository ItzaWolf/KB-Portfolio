import React from 'react';
import './navbar.css';
import sendInfo from "/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/send.png";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='desktopMenu'>
        <ScrollLink to="home" className='desktopMenuListItem' smooth={true} duration={500} offset={-50}>Home</ScrollLink>
        <ScrollLink to="skills" className='desktopMenuListItem' smooth={true} duration={500} offset={-50}>About</ScrollLink>
        <ScrollLink to="projects" className='desktopMenuListItem' smooth={true} duration={500} offset={-50}>Projects</ScrollLink>
      </div>
        <ScrollLink to="contactForm" className='desktopMenuBtn' smooth={true} duration={500} offset={-50}>
            <img src={sendInfo} alt='' className='desktopMenuImg' />Contact Me
        </ScrollLink>
    </nav>
  );
}

export default Navbar;
