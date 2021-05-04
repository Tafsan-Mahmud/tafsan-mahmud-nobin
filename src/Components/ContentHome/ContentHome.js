import React from 'react';
import './ContentHome.css';
import Typical from 'react-typical'
import mainPic from './IMG_2258-02-01.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faUserShield } from '@fortawesome/free-solid-svg-icons'


const ContentHome = () => {

    return (
        <main style={{ height: '600px' }} className="row d-flex container-fluid justify-content-center align-items-center">
            <div className="col-md-5 text-part-content-home">
                <h4>Hello , My Name Is</h4>
                <h1>Tafsan Mahmud Nobin</h1>
                <h3>And Im a <span style={{ color: '#bd0055' }}>
                    <Typical steps={['Programmer', 2000, 'Desginer', 2000, 'Web Developer', 2000, 'Photographer', 2000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </span>
                </h3>
                <p>Programming is my passion . I love to work with web technologies . My goal is to be a software engineer and develop efficient software systems .</p>
                <button type="button" class="btn button-hire">HIRE ME <FontAwesomeIcon icon={faUserShield} /></button>
                <a href="https://drive.google.com/uc?export=download&id=1TkxF7iaeAT5iSiB9dPsYoJUQOw91-ohK"><button type="button" class="btn button-resume-d">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>
            <div className="col-md-5 img-home d-flex justify-content-center align-items-center ">
                <img src={mainPic} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default ContentHome;