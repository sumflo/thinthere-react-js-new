import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import logo from '../assets/images/logo.png'

function MyCarousel() {

    return(
        <Carousel variant="dark" className="carousel-box">
            <Carousel.Item className="carousel-background-1">
                <div className="thin-logo">
                    <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h5 className="carousel-slogan">Don't wait with the overweight.</h5>
                <p className="carousel-paragraph">Health is the most important thing, leanness is just a bonus.
                    We help you achieve your goal be it a healthy body, endurance building,
                    muscle building, or weight loss. So don't wait with the overweight.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-background-2">
                <Carousel.Caption>
                <h5 className="carousel-slogan">Be fit, click!</h5>
                <p className="carousel-paragraph">Home delivery within 3 working days.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-background-3">
                <Carousel.Caption>
                <h5 className="carousel-slogan">Save time!</h5>
                <p className="carousel-paragraph">A few clicks and you can start your home workout with the</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel