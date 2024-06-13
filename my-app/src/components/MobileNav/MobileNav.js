import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, 
    FcVideoProjector, }from 'react-icons/fc';
  import {Link} from 'react-scroll';
  
  
  
import './MobileNav.css'
const MobileNav = () => {
    const [open,setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    };
    const handelMenuCLick = () => {
      setOpen(false)
    }
  return (
    <>
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (<AiOutlineMenuFold  size={30} className='mobile-nav-icon' onClick={handleOpen}/>)
             : (<GiHamburgerMenu size={30} className='mobile-nav-icon'onClick={handleOpen}/>)}
            
            <span className='mobile-nav-title'>My portfolio  App</span>

        </div>
        {open && (

       
        <div className='mobile-nav-menu'>
         <div className="nav-items">
           <div className="nav-item">
            <div className="nav-link">
          <Link to ='home' spy={true} smoth ={true} offset={-100} duration={100} 
          onClick = {handelMenuCLick}
          >
            
          <FcHome/>
          home
          </Link>
         
            </div>
          <div className="nav-link">
          <Link to ='about' spy={true} smoth ={true} offset={-100} duration={100}
          onClick = {handelMenuCLick}>
          <FcAbout/>
          About
          </Link>
          </div>
          <div className="nav-link">
          <Link to ='education' spy={true} smoth ={true} offset={-100} duration={100}
          onClick = {handelMenuCLick}>
          <FcReadingEbook/>
          Education
          </Link>
          </div>
          
          <div className="nav-link">
          <Link to ='techstack' spy={true} smoth ={true} offset={-100} duration={100}
          onClick = {handelMenuCLick}>
          <FcBiotech/>
          Tech Stack
          </Link>
          </div>
          
          <div className="nav-link">
          <Link to ='projects' spy={true} smoth ={true} offset={-100} duration={100}
          onClick = {handelMenuCLick}>
          <FcVideoProjector/>
          Projects
          </Link>
          </div>

          <div className="nav-link">
          <FcPortraitMode/>
          Work Experience
          </div>
         
          <div className="nav-link">
          <Link to ='contact' spy={true} smoth ={true} offset={-100} duration={100}
          onClick = {handelMenuCLick}>
          <FcContacts/>
          Contact
          </Link>
          </div>

      </div>
    </div>
        </div>
         )}
    </div>

    </>
  )
}

export default MobileNav