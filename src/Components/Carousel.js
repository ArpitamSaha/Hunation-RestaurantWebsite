import React from 'react';
import image1 from './images/FoodBanner.jpeg'
import image2 from './images/FoodBanner.jpeg'
import image3 from './images/FoodBanner.jpeg'

function Carousel() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" >
            <div className="carousel-item active">
                <img src={image1} className="d-block w-100 " alt="First Page"/>
            </div>
            <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="Second Page"/>
            </div>
            <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="Third Page"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}

export default Carousel