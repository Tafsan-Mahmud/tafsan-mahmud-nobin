import React from 'react';
import grand1 from './grand-1.JPG';
import grand2 from './grand-2.JPG';
import grand3 from './grand-3.JPG';
import grand4 from './grand-4.JPG';
import grand5 from './grand-5.JPG';
import grand6 from './grand-6.JPG';
import grand7 from './grand-7.JPG';
import grand8 from './grand-8.JPG';

const PCard1 = () => {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={grand1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand5} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand6} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand7} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={grand8} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCard1;