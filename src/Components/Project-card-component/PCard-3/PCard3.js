import React from 'react';
import panda1 from './panda-1.JPG';
import panda2 from './panda-2.JPG';
import panda3 from './panda-3.JPG';
import panda4 from './panda-4.JPG';
import panda5 from './panda-5.JPG';


const PCard3 = () => {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={panda1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={panda2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={panda3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={panda4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={panda5} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCard3;