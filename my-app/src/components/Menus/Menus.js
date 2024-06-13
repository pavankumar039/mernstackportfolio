import React from 'react';
import './Menus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import prp from '../../assets/images/prp.jpeg';
import {FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, 
  FcVideoProjector, }from 'react-icons/fc';
import {Link} from 'react-scroll';

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <Zoom>
      <div className="navbar-profile-pic">
    <img src={prp} alt='profilepic'/>
    </div>
    </Zoom>
    <Fade left>
    <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <Link to ='home' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcHome/>
          home
          </Link>
         
          </div>
          <div className="nav-link">
          <Link to ='about' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcAbout/>
          About
          </Link>
          </div>
          <div className="nav-link">
          <Link to ='education' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcReadingEbook/>
          Education
          </Link>
          </div>
          
          <div className="nav-link">
          <Link to ='techstack' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcBiotech/>
          Tech Stack
          </Link>
          </div>
          
          <div className="nav-link">
          <Link to ='projects' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcVideoProjector/>
          Projects
          </Link>
          </div>

         {/* <div className="nav-link">
          <FcPortraitMode/>
          Work Experience
          </div> */}
         
          <div className="nav-link">
          <Link to ='contact' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcContacts/>
          Contact
          </Link>
          </div>

      </div>
    </div>
    </Fade>
    </>
    ) : (
      <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
        <Link to ='home' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcHome/>
          
          </Link>
         
          </div>
          <div className="nav-link">
          <Link to ='about' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcAbout/>
          
          </Link>
          </div>
          <div className="nav-link">
          <Link to ='education' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcReadingEbook/>
         
          </Link>
          
          </div>
          
          <div className="nav-link">
          <Link to ='techstack' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcBiotech/>
          
          </Link>
          
          </div>
          
          <div className="nav-link">
          <Link to ='projects' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcVideoProjector/>
          
          </Link>
        
          </div>
          <div className="nav-link">
          <FcPortraitMode/>
      
          </div>
          
          <div className="nav-link">
          <Link to ='contact' spy={true} smoth ={true} offset={-100} duration={100}>
          <FcContacts/>
          
          </Link>
       
          </div>

      </div>
    </div>

    )}
      
    </>
  );
};

export default Menus;