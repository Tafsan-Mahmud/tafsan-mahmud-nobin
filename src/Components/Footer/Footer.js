import React from 'react';import  './Footer.css';
import pic1 from './1.jpg';
import pic2 from './2.png';
import pic3 from './3.png';
import pic4 from './4.png';

const footer = () => {
    return (
        <div className="footer-style" >
            <div className="d-flex justify-content-center align-items-center pt-4" >
                <a href="https://github.com/Tafsan-Mahmud" target="_blank" rel="noreferrer"><img src={pic1} alt=""/></a>
                <a href="https://www.facebook.com/tafsanmahmudnobin090" target="_blank" rel="noreferrer"><img src={pic2} alt=""/></a>
                <a href="https://www.instagram.com/tafsan_mahmud_07" target="_blank" rel="noreferrer"><img src={pic3} alt=""/></a>
                <a href="https://www.linkedin.com/in/tafsanmahmudnobin" target="_blank" rel="noreferrer"><img src={pic4} alt=""/></a>
            </div>
             <p className="text-center mt-4">Copyright {(new Date().getFullYear())} All Rights Reserved</p>
        </div>
    );
};

export default footer;