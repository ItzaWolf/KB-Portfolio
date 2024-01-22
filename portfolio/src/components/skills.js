import React from 'react';
import './skills.css';
import reactLogo from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/react-logo.png';
import pythonLogo from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/python-logo.png';
import collab from '/home/itzawolf/Development/code/Personal Projects/KB-Portfolio/portfolio/src/assets/collaboration.png';

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='skillTitle'>About Me</h2>
      <p className='skillDesc'>I'm a Denver native through and through. When I'm not immersed in coding challenges, you'll find me hitting the ski slopes or diving into the latest in gaming. My current top picks? Spider-Man 2, Valorant, and Baldur's Gate 3! Having been a gamer all my life, it was only a matter of time before the code came to me! I bring a friendly vibe and a hardworking attitude to every project. Wondering what I can bring to your business? Let me show you!</p>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={reactLogo} alt='WebDesign' className='skillImg' />
          <div className='skillBarText'>
            <h3 className='skillBarTitle'>Website Design</h3>
            <p>Focused on crafting engaging websites with React, I deliver seamless designs and user-friendly interfaces. Meticulous attention to detail defines my work, offering a unique blend of creativity and functionality. My goal is to enhance your online presence, elevate user satisfaction, and exceed expectations through innovative design.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={pythonLogo} alt='SecureDatabaseAuth' className='skillImg' />
          <div className='skillBarText'>
            <h3 className='skillBarTitle'>Secure & Expansive Databases</h3>
            <p>Specializing in secure database management, I use advanced hash-mapping technology to ensure the privacy of information. Through robust security measures, I encrypt sensitive data against potential threats. I also construct and manipulate datasets to support your business products, enhancing their efficiency and functionality.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={collab} alt='Friendly and Easy to Work With' className='skillImg' />
          <div className='skillBarText'>
            <h3 className='skillBarTitle'>Friendly Collaboration</h3>
            <p>Fostering a positive and collaborative environment, I prioritize effective communication and approachability. Always open to discussions, I believe in the power of seamless teamwork to bring creative ideas to life. More brains collaborating lead to better outcomes!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
