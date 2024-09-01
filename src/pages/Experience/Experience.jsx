import React from 'react'
import './Experience.scss'

import Lottie from 'lottie-react';
import experience from '../../assets/experience.json'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="experience-heading">
        <div className="experience-heading-img-div">
          <Lottie className="experience-img" animationData={experience} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="experience-heading-text-div">
          <div className="experience-heading-text">
            <h1>Experience</h1>
          </div>
          <div className="experience-heading-sub-text">
            <h3>Work and Internship</h3>
          </div>
          <p className="experience-header-detail-text">I've completed one internship. I've mostly done projects on my own and I am actively looking for full time jobs.</p>
        </div>
      </div>
      <div className="experience-body">
        <div className="work-experience-heading">
          <h1>Here's my experience</h1>
        </div>
        <div className="work-experience-body">
          <div className="work-experience-section">
            <div className="heading">
              <h2>Internship</h2>
            </div>
            <div className="work-experience-card card">

              <div className="card-header">
                <div className="card-img">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256" alt="" srcset="" />
                </div>
                <div className="card-title">
                  <div className="role-name">
                    <h2>Software Engineer Intern</h2>
                  </div>
                  <div className="company-name">
                    <h3>Myntra Designs Pvt. Ltd.,</h3>
                  </div>
                </div>
                <div className="card-duration">
                  <h3>Aug, 2023 - Feb, 2024</h3>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>
                    ⚡<p>Developed and optimized scripts for crawling competitive platforms, enhancing the company's competitive intelligence capabilities.</p></li>
                  <li>⚡<p>Developed and optimized scripts for crawling competitive platforms, enhancing the company's competitive intelligence capabilities.</p></li>

                  <li>
                    ⚡<p>Monitored and maintained the health of crawl jobs, proactively resolving issues to ensure reliable data collection.</p></li>
                  <li>⚡<p>Collaborated with cross-functional teams to integrate and improve the crawling system within the existing infrastructure.</p></li>
                  <li>⚡<p>Optimized the performance of crawling scripts, reducing execution time and resource consumption, leading to faster and more cost-effective data collection.</p></li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/groovy/groovy-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="work-experience-section">
            <div className="heading">
              <h2>Work</h2>
            </div>
            <div className="work-experience-card card">
              Loading...
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
