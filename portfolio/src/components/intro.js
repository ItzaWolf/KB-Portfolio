import React from 'react';
import './intro.css';
import bg from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/Profile.png';
import sendInfo from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/send.png';
import { Link as ScrollLink } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div id='home' className='introContent'>
        <h1 className='hello'>Hello,</h1>
        <div className='introText'>
          <p>
            I'm <span className='introName'>Kaleb</span> <br />A FullStack Developer
          </p>
        </div>
        <p className='introPara'>
          A skilled full-stack developer experienced in creating <br />
          <span className='orangePara'>seamless user interfaces</span> and building{' '}
          <span className='orangePara'>secure databases</span> <br />
          for web applications. <br />
          <span className='orangePara'>Nice to meet you!</span>
        </p>
        <ScrollLink to='contactForm' smooth={true} duration={500} offset={-50}>
          <button className='btn'>
            <img className='contactBtn' src={sendInfo} alt='' />
            Contact Me
          </button>
        </ScrollLink>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
};

export default Intro;
