import React from 'react'
import mainbanner1 from '../assets/images/mainbanner1.png';
import mainbanner2 from '../assets/images/mainbanner2.png';

const slidder = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="10000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mainbanner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={mainbanner2} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slidder
