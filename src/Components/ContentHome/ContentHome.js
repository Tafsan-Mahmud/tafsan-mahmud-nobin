import React from 'react';
import './ContentHome.css';
import Typical from 'react-typical'
import mainPic from './IMG_2258-02-01.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ContentHome = () => {

    return (
        <main className="bg-height row d-flex container-fluid justify-content-center align-items-center">
            <div className="col-md-5 text-part-content-home">
                <h4>Hello, My Name is</h4>
                <h1>Abu Hasnat Nobin</h1>
                <h3>And Im a <span style={{ color: '#bd0055' }}>
                    <Typical steps={['React Developer', 2000,'Programmer', 2000,'Web Developer', 2000,'MERN -Stack Developer',3000,'Photographer', 2000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </span>
                </h3>
                <p>Programming is my passion . I love to work with web technologies . My goal is to be a software engineer and develop efficient software systems .</p>
                <Link to="/contact"><button type="button" class="btn button-hire">HIRE ME <FontAwesomeIcon icon={faUserShield} /></button></Link>
                <a href="https://drive.google.com/uc?export=download&id=1HB6OiRHK74ZVDjeX1Uol9sHDEdrLmNW7"><button type="button" class="btn button-resume-d">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>
            <div className="col-md-5 img-home d-flex justify-content-center align-items-center ">
                <img src={mainPic} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default ContentHome;