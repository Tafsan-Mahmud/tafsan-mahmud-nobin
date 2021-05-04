import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './Layer 0.png';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-navbar ">
                <div class="container">
                    <a class="navbar-brand brand-name" href="#"><img src={logo} alt=""  width="100"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav hover-link ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr" to="/AboutAndSkills">About & Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr" to="/blog">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link   nav-font-clr" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  login-spcl  nav-font-clr" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;