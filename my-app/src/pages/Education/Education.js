import React from 'react'
import {MdSchool} from 'react-icons/md'
import {
     VerticalTimeline,
     VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
  return (
    <>
     <div className=' education' id='education'>
     <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        EDUCATION DETAILs</h2>
            <hr/>
            <VerticalTimeline>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - present"
    iconStyle={{ background: ' #138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Swarnandhra college of engineering and technology, seetharampuram</h4>
    <h6 className="vertical-timeline-element-subtitle">Strem-Information Technology</h6>
   
  </VerticalTimelineElement>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018 - 2021"
    iconStyle={{ background: ' #138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Diploma</h3>
    <h4 className="vertical-timeline-element-subtitle">Smt.B.Seetha polytechnic, Vishnupur</h4>
    <h6 className="vertical-timeline-element-subtitle">Strem-Electronics and Communication Engineering</h6>
  </VerticalTimelineElement>
            </VerticalTimeline>
    </div> 
    </>
  )
}

export default Education