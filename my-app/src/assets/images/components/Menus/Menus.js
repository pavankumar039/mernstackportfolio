import React from 'react';
import './Menus.css';
import prp from '../../assets/images/prp.jpeg';
import {FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation}from 'react-icons/fc'

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <div className="navbar-profile-pic">
    <img src={prp} alt='profilepic'/>
    </div>
    <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <FcHome/>
          home
          </div>
          <div className="nav-link">
          <FcAbout/>
          About
          </div>
          <div className="nav-link">
          <FcPortraitMode/>
          Work Experience
          </div>
          <div className="nav-link">
          <FcBiotech/>
          Tech Stack
          </div>
          <div className="nav-link">
          <FcReadingEbook/>
          Education
          </div>
          <div className="nav-link">
          <FcVideoProjector/>
          Projects
          </div>
          <div className="nav-link">
          <FcVoicePresentation/>
          Testimonal
          </div>
          <div className="nav-link">
          <FcContacts/>
          Contact
          </div>

      </div>
    </div>
    </>
    ) : (
      <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <FcHome title='Home'/>
         
          </div>
          <div className="nav-link">
          <FcAbout/>
          
          </div>
          <div className="nav-link">
          <FcPortraitMode/>
      
          </div>
          <div className="nav-link">
          <FcBiotech/>
          
          </div>
          <div className="nav-link">
          <FcReadingEbook/>
        
          </div>
          <div className="nav-link">
          <FcVideoProjector/>
        
          </div>
          <div className="nav-link">
          <FcVoicePresentation/>
         
          </div>
          <div className="nav-link">
          <FcContacts/>
       
          </div>

      </div>
    </div>

    )}
      
    </>
  );
};

export default Menus;