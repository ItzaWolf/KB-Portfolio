import React from 'react';
import './navbar.css';
import sendInfo from "/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/send.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='desktopMenu'>
        <Link to="home" className='desktopMenuListItem'>Home</Link>
        <Link to="about" className='desktopMenuListItem'>About</Link>
        <Link to="portfolio" className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={sendInfo} alt='' className='desktopMenuImg' />Contact Me</button>
    </nav>
  );
}

export default Navbar;
