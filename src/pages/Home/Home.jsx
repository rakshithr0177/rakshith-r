import React from 'react'
import './Home.scss'

import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import coder from '../../assets/coder.json'
import { motion } from "framer-motion"
import { variation } from '../../services/variations';


const Home = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "../../assets/RakshithR_June_2024.pdf";
        link.download = "RakshithR.pdf";
        link.click();
    };
    return (
        <div className='home'>
            <div className="greeting-main">
                <div className="greeting-text-div">
                    <h1>Hello.</h1>
                    <h2>I'm
                        <span className="name">Rakshith R.</span>
                    </h2>
                    <div className='type-animation-div'>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'Problem Solving Enthusiast',
                                1000,
                                'Software Engineer Enthusiast',
                                1000,
                                'Always learning',
                                1000,
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}

                        />
                    </div>
                    <button className="resume-button" onClick={handleDownload}>
                        see my Resume
                    </button>
                </div>
                <div className="greeting-image-div">
                    <Lottie animationData={coder} loop={true} autoplay={true} speed={1} />
                </div>
            </div>
            <div className="skills">
                <motion.div
                    className="skills-heading"
                    initial={{ x: "100%" }}
                    animate={{ x: "0" }}
                >
                    <h1>Here's what I do</h1>
                </motion.div>
                <div className="skills-body">
                    <div className="skills-main">

                        <div className="software-skills item item1">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                        </div>
                        <div className="skills-content item item2">
                            <div className="skills-main-heading">
                                <h2>Web Development</h2>
                            </div>
                            <ul>
                                <li>⚡
                                    <p>Building responsive website using ReactJS for frontend.</p>
                                </li>
                                <li>⚡
                                    <p>Backend development using NodeJS, ExpressJS and MongoDB.</p>
                                </li>
                                <li>⚡
                                    <p>Version control using git and api tesing using postman.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="skills-main">
                        <div className="skills-content item item2">
                            <div className="skills-main-heading">
                                <h2>Programming Languages</h2>
                            </div>
                            <ul>
                                <li>⚡
                                    <p>Demonstrated strong problem-solving skills by consistently tackling complex Data Structures and Algorithms challenges, resulting in optimized and efficient solutions.</p>
                                </li>
                                <li>⚡
                                    <p>Proficient in SQL with experience in designing and optimizing complex queries to efficiently manage and retrieve data from large databases</p>
                                </li>
                                <li>⚡
                                    <p>Experienced in using Linux-based commands and have foundational knowledge in Bash scripting for automating tasks and managing system operations.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="software-skills item item1">

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />


                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
