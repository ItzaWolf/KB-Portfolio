import React from 'react';
import './intro.css';
import bg from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/Profile.png';
import sendInfo from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/send.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Kaleb</span> <br />A FullStack Developer
        </span>
        <p className='introPara'>
          A skilled full-stack developer experienced in creating <br />
          <span className='orangePara'>seamless user interfaces</span> and building{' '}
          <span className='orangePara'>secure databases</span> <br />
          for web applications. <br />
          <span className='orangePara'>Nice to meet you!</span>
        </p>
        <Link>
          <button className='btn'>
            <img className='contactBtn' src={sendInfo} alt='' />
            Contact Me
          </button>
        </Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
};

export default Intro;
