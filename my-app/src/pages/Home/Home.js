import React from 'react';
import { useTheme } from '../../assets/context/ThemeContext';
import Typewriter from 'typewriter-effect';
import resumee from '../../assets/docs/resumee .pdf';
import {BsFillMoonStarsFill,BsSunFill} from 'react-icons/bs'

import './home.css';
import Fade from 'react-reveal/Fade';

const Home = () => {
  const [theme,setTheme] = useTheme()
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
    <div className="container-fluid home-container" id='home'>
      <div className='theme-btn' onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) : (<BsSunFill size={30}/>)}
      </div>
      <div className='container home-content'>
        <Fade right>
                  <h2>Hi 👋 I'm a</h2>
        <h1>
        <Typewriter
  options={{
    strings: ['Student', 'from information technology'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        </Fade>
        <Fade bottom>

        <div className='home-button'>
          <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=8096374806"
          rel="noreferer"
          target='blank'>Hire Me</a>
         
          <a className='btn btn-cv' href={resumee} download={resumee.pdf}>My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    
    </>
  )
}

export default Home;