import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutAndSkills.css';
import Footer from '../Footer/Footer'
import picForSkils from './IMG_2258-02-01.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faUserShield } from '@fortawesome/free-solid-svg-icons'



const AboutAndSkills = () => {
    return (
        <div className="about-skills-sec ">
            <Navbar></Navbar>
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center">
                    <div class="col-md-6 col-sm-12 col-xs-12 pb-5 pt-3">
                        <div className="img-abt">
                            <img src={picForSkils} alt="" />
                            <h3>Hi There!</h3>
                            <h1><span className="span-is-name">My Name IS </span><span className="span-full-name">Tafsan Mahmud Nobin</span></h1>
                            <p>I am a Full stack Web Developer. What I like is to learn new things and work hard.
                                <br />
                                <br />
                               and im a photographer and Photoshop editor
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima, unde dolore autem accusamus recusandae quos nam saepe suscipit provident at molestias sequi atque, consequatur doloremque fugit labore hic commodi!
                           </p>
                            <button type="button" class="btn button-hire-abt">HIRE ME <FontAwesomeIcon icon={faUserShield} /></button>
                            <a href="https://drive.google.com/uc?export=download&id=1TkxF7iaeAT5iSiB9dPsYoJUQOw91-ohK"><button type="button" class="btn button-resume-abt">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 pb-3">
                        <div className="skills">
                            <h1 style={{ color: '#00ccbb' }}>My Skills</h1>
                            <br />
                            <br />
                            <h4>Programming Language</h4>
                            <div className="name-of-skils">
                                <h6>Javascript</h6>
                                <h6>Typescript</h6>
                            </div>
                            <br />
                            <h4>Front-End</h4>
                            <div className="name-of-skils">
                                <h6>HTML5</h6>
                                <h6>CSS3</h6>
                                <h6>Reactjs</h6>
                                <h6>Javascript</h6>
                                <h6>ES6</h6>
                                <h6>SASS</h6>
                                <h6>Bootstrap</h6>
                                <h6>Ract-Router</h6>
                                <h6>Material-UI</h6>
                                <h6>Github</h6>
                                <h6>Redux</h6>
                                <h6>NextjS</h6>
                                <h6>VSCode</h6>
                                <h6>Typescript</h6>
                            </div>
                            <br />
                            <h4>Back-End</h4>
                            <div className="name-of-skils">
                                <h6>Nodejs</h6>
                                <h6>ExpressjS</h6>
                                <h6>REST API</h6>
                            </div>
                            <br />
                            <h4>Database</h4>
                            <div className="name-of-skils">
                                <h6>Mongodb</h6>
                            </div>
                            <br />
                            <h4>Hosting</h4>
                            <div className="name-of-skils">
                                <h6>Firebase</h6>
                                <h6>Netlify</h6>
                                <h6>Github Pages</h6>
                                <h6>Heroku</h6>
                            </div>
                            <br />
                            <h4>Version Control</h4>
                            <div className="name-of-skils">
                                <h6>Git</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutAndSkills;