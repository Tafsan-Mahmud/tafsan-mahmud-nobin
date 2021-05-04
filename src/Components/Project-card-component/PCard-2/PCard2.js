import React from 'react';
import bazar1 from './bazar-1.JPG';
import bazar2 from './bazar-3.JPG';
import bazar3 from './bazar-4.JPG';
import bazar4 from './bazar-2-loging.JPG';


const PCard2 = () => {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={bazar1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={bazar2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bazar3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bazar4} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCard2;