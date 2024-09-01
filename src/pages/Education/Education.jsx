import React from 'react'
import './Education.scss'

import Lottie from 'lottie-react';
import graduate from '../../assets/graduate.json'

const Education = () => {
  return (
    <div className='education'>
      <div className="heading">
        <div className="heading-img-div">
          <Lottie className="graduate-img" animationData={graduate} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="heading-text-div">
          <h1 className='heading-text'>
            Education
          </h1>
          <h3 className='heading-sub-text'>
            Basic Qualification and Certifications
          </h3>
          <p className='heading-details-text'>
            I actively participate in contests and other tech-related activities. Below are some of my major qualifications.
          </p>
        </div>

      </div>

      <div className="degrees">
        <div className="degrees-header-div">
          <h1>Degree Recieved</h1>
        </div>
        <div className="degrees-body-div">
          <div className="degree-container-div">
            <div className="degree-logo-div card">
              <img src="https://revaeduin.s3.ap-south-1.amazonaws.com/assets/frontend/images/logo-icon.png" alt="some" srcset="" />
            </div>
            <div className="degree-card card">
              <div className="degree-card-header">
                <div className="degree-card-title">
                  <h2 className='title'>Reva University</h2>
                  <h3 className='subtitle'>B.Tech. in Computer Science and Engineering</h3>
                </div>
                <div className="degree-card-duration">
                  <h3 className="duration">2020 - 2024</h3>
                </div>
              </div>
              <div className="degree-card-content">
                <p>⚡ I have studied core subjects like Data Structures, DBMS & SQL, Networking and Operating System.</p>
                <p>⚡ I have also learnt Web Development using ReactJS for frontend, and NodeJS ,ExpressJS and MongoDB.</p>
                <p>⚡ I have implemented several projects based on what I've learnt under my Computer Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
