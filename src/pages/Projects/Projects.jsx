import React from 'react'
import './Projects.scss'

import Lottie from 'lottie-react';
import project from '../../assets/project.json'
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className='project'>
      <div className="project-heading">
        <div className="project-heading-img-div">
          <Lottie className="project-img" animationData={project} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="project-heading-text-div">
          <div className="project-heading-text">
            <h1>Projects</h1>
          </div>
          <p className="project-header-detail-text">My projects makes use of vast variety of latest technology tools. My best experience is to create  Web Development projects.</p>
        </div>
      </div>

      <div className="project-body">
        <div className="project-work-heading">
          <h1>Here's my projects</h1>
        </div>
        <div className="project-work-body">
          <div className="project-work-card card">
            <div className="project-work-img item1">
              <img src="/image/project1.png" />
            </div>
            <div className="project-work-content item2">
              <div className="project-work-header">
                <div className="project-work-heading">
                  <div className="project-work-title">
                    <h2>ArtBaba</h2>
                    <h3>Full Stack website</h3>
                  </div>

                </div>
                <div className="project-work-duration">
                  <h3>June, 2023</h3>
                  <div className="project-work-links">
                    <a href="https://artbaba.vercel.app/"><OpenInNewSharpIcon /></a>
                    <a href="https://github.com/rakshithr0177/artbaba"><GitHubIcon /></a>
                  </div>
                </div>
              </div>

              <div className="project-work-body">
                <ul>
                  <li>⚡
                    <p>Tech Stack: React.js, Express.js, Node.js, MongoDB, CSS.</p>
                  </li>
                  <li>⚡
                    <p>Developed a blogging platform designed to showcase artists' talents using the MERN stack.</p>
                  </li>
                  <li>⚡
                    <p>Implemented user authentication and authorization with JSON Web Tokens (JWT).</p>
                  </li>
                  <li>⚡
                    <p>Created a well-structured menu to navigate the home page, content, create posts, and integrated like/dislike functionality for each post.</p>
                  </li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />

                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />



                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />



                    </div>
                  </li>
                </ul></div>
            </div>
          </div>

          <div className="project-work-card card">
            <div className="project-work-img item1">
              <img src="/image/project2.png" />
            </div>
            <div className="project-work-content">
              <div className="project-work-header">
                <div className="project-work-heading">
                  <div className="project-work-title">
                    <h2>Sorting Visualizer</h2>
                    <h3>Static website</h3>
                  </div>

                </div>
                <div className="project-work-duration">
                  <h3>January, 2023</h3>
                  <div className="project-work-links">
                    <a href="https://react-sorting-algo.vercel.app/"><OpenInNewSharpIcon /></a>
                    <a href="https://github.com/rakshithr0177/react-sorting-algo"><GitHubIcon /></a>
                  </div>
                </div>
              </div>
              <div className="project-work-body item2">
                <ul>
                  <li>⚡
                    <p>Tech Stack: React.js, Redux, CSS.</p>
                  </li>
                  <li>⚡
                    <p>Created a project to visualize and analyze sorting algorithms using React.js.</p>
                  </li>
                  <li>⚡
                    <p>Implemented a structured control panel to customize array size, sorting speed, and algorithm selection, with Redux for state management.</p>
                  </li>
                  <li>⚡
                    <p>Included functionality to display the time complexity and space complexity of the selected algorithm.</p>
                  </li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />

                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />


                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />




                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
