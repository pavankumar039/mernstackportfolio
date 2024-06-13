import React from 'react';
import './About.css';
import prp from '../../assets/images/prp.jpeg';
import Jump from 'react-reveal/Jump';


const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src={prp}
                    alt="profilepic">
                </img>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
              <h1>About Me</h1>
              <p>Hi, I'm G.H.G.Pavan Kuma a final year B.Tech student with a passion for all things tech! Imagine a world of 
                coding, problem-solving, and a little bit of chaos that's where I thrive.I'm currently
                 navigating the academic maze at Swarnandhra college of engineering and technology,
                  exploring the wonders of INFORMATION TECHNOLOGY. From writing code that feels like
                   magic to solving puzzles that make life simpler, I'm on a mission to bring tech
                    dreams to life.Looking ahead, I'm excited about Web development,devops, and my
                     future involves thrugh this technologies.
              </p>
              </div>
        </div>
    </div>
    </Jump>

    </>
  )
}

export default About;