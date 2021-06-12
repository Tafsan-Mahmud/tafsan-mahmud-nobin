import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css';
import Footer from '../Footer/Footer';
import eSeller from './pjctss.JPG';
import grand from './grand-1.JPG';
import doctor from './doctor-1.JPG';
import panda from './panda-2.JPG';
import bazar from './bazar-1.JPG';
import slider from './slider-1.JPG';
import emajon from './emajon-1.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {
    return (
        <div className="blog-bg">
            <Navbar></Navbar>
            <h1 className="text-center">Some Projects</h1>
            <div className="container pt-4 pb-4">
                <div class="row row-cols-1 row-cols-md-3 g-5  pt-4 pb-4">
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={grand} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Grand Salon</h5>
                                <p class="card-text">A website for a Salon agency with responsive UI. Authenticated users can
                                    order and check services. An authenticated admin can add new services and new
                                    admin also. Admin can change order’s status to notify the clients about progress.
                                    Admin can Delete Product from UI (database) .Customer can review on the services if they wish .</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>React</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>Mongodb</span>
                                    <span>Heroku</span>
                                    <span>Firebase</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/Grand-Salon" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success "><FontAwesomeIcon icon={faCode} /> Source Code</button></a>
                                <a href="/https://beardz.firebaseapp.com" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success "><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={doctor} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Doctors Portal</h5>
                                <p class="card-text">A full-stack app where you can pick the date and time and fix an appointment with your doctor. A doctor can
                                    review his appointments and prescribe medicine to a patient.. Daily patients count report Patient can see his/her prescribe</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>React</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>Mongodb</span>
                                    <span>Heroku</span>
                                    <span>Firebase</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/doctors-portal-home-page" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faCode} /> Source Code</button></a>
                                <button type="button" disabled class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> updateing</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={eSeller} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">E-Seller</h5>
                                <p class="card-text">( Team Project )-A main header section with site information.Products section that contain multiple products. User can see product details by choosing a specific product. User can add multiple product to product cart at a time. Proper billing information will be visible to user. User can checkout by adding required information.</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>React</span>
                                    <span>Redux</span>
                                    <span>Bootstrap</span>
                                    <span>React-Router</span>
                                    <span>Firebase</span>
                                    <span>Trello</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/E-Seller" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Source Code</button></a>
                                <a href="https://e-seller-720bf.web.app/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={bazar} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">E-Bazar</h5>
                                <p class="card-text">This is a E-Commerce website with responsive UI. Authenticated users can
                                    order and checkout Product . An authenticated admin can add new Product.
                                    Admin can Delete Product from UI (database) .Customer can Watch only his orders if they want.</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>React</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>Mongodb</span>
                                    <span>Heroku</span>
                                    <span>Firebase</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/E-Bazar" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success "><FontAwesomeIcon icon={faExternalLinkAlt} /> Source Code</button></a>
                                <a href="https://e-bazar-105f5.firebaseapp.com/" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={emajon} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Ema-John</h5>
                                <p class="card-text">Its a big online shopping site. customer can search any type of product in the search feild. add to cart any type of product  and buy product .the  customer has to pay for purchase of any product (<strong> payment mathod Stripe</strong> ) </p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>React</span>
                                    <span>Bootstrap</span>
                                    <span>Material-UI</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>Mongodb</span>
                                    <span>Heroku</span>
                                    <span>Firebase</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/ema-jhon-simple" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faCode} /> Source Code</button></a>
                                <a href="https://ema-jhon-simple-7d3b0.web.app" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={panda} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Panda E-commerce</h5>
                                <p class="card-text">This is a online shopping web site .customar can buy any catagoris of product .</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>Bootstrap</span>

                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/my-panda-commerce-bootstrap" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Source Code</button></a>
                                <a href="https://tafsan-mahmud.github.io/my-panda-commerce-bootstrap" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-blog h-100">
                            <div className="img-card">
                                <img src={slider} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Fancy Slider</h5>
                                <p class="card-text">This is a very amazing site  for funniest people becaouse anyone search any catagoris of photo and select any photo to make slider</p>
                                <div className="technology">
                                    <span>Javascript</span>
                                    <span>Bootstrap</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <a href="https://github.com/Tafsan-Mahmud/assignment-6-fancy-slider" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Source Code</button></a>
                                <a href="https://tafsan-mahmud.github.io/assignment-6-fancy-slider" target="_blank" rel="noreferrer"><button type="button" class="btn btn-success"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Preview</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;