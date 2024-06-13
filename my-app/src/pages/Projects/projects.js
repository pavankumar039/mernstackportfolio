import React from 'react';

import './projects.css';
import qua from '../../assets/images/qua.png'
import Spin from 'react-reveal/Spin';

const projects = () => {
  return (
    <>
    <div className='container project' id='projects'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        TOP RECENT PROJECTS</h2>
            <hr/>
            <p className='pb-3 text-center'>
            Hi, I'm G.H.G.Pavan Kuma a final year B.Tech student with a passion for all things tech! Imagine a world of 
                coding, problem-solving, and a little bit of chaos that's where I thrive.I'm currently
                 navigating the academic maze at Swarnandhra college of engineering and technology,
                  exploring the wonders of INFORMATION TECHNOLOGY. From writing code that feels like
                   magic to solving puzzles that make life simpler, I'm on a mission to bring tech
                    dreams to life.Looking ahead, I'm excited about Web development,devops, and my
                     future involves thrugh this technologies
            </p>
            {/*card design*/}
            <div className='row' id='ads'>
                <Spin>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>full stack</span>
                            <img src={qua} alt='imagepic'></img>

                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mangodb</span>
                        </div>
                        <div className='card-body text-center '>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>qualitywalls </h5>
                            </div>
                            <a className='ad-btn' href='#'>View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>machine learning</span>
                            <img src={'https://bernardmarr.com/img/How%20Tesla%20Is%20Using%20Artificial%20Intelligence%20to%20Create%20The%20Autonomous%20Cars%20Of%20The%20Future.jpg'} alt='imagepic'></img>

                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>python</span>
                            <span className='card-detail-badge'>html</span>
                           
                        </div>
                        <div className='card-body text-center '>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Self driving car </h5>
                            </div>
                            <a className='ad-btn' href='#'>View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>deep learning</span>
                            <img src={'https://www.mouser.in/blog/Portals/11/Dongang_Machine%20Learning_Theme%20Image-min_1.jpg'} alt='imagepic'></img>

                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>python</span>
                            <span className='card-detail-badge'>streamlit</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mangodb</span>
                        </div>
                        <div className='card-body text-center '>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Lip reading </h5>
                            </div>
                            <a className='ad-btn' href='view'>View</a>
                        </div>
                    </div>
                </div>
                </Spin>

            </div>
       
        </div>
    </>
  )
}

export default projects;