import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import health from '../assets/images/background/health.jpg'

function MyCarousel() {
    return(
        <Carousel variant="dark">
            <Carousel.Item className="carousel-background-1 carousel-item">
                <img
                className="d-block w-100"
                src="../assest/images/thin-there-logo-nobg.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Don't wait with the overweight.</h5>
                <p>Health is the most important thing, leanness is just a bonus.
                    We help you achieve your goal be it a healthy body, endurance building,
                    muscle building, or weight loss. So don't wait with the overweight.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-background-2 carousel-item">
                <Carousel.Caption>
                <h5>Be fit, click!</h5>
                <p>Home delivery within 3 working days.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-background-3 carousel-item">
                <Carousel.Caption>
                <h5>Save time!</h5>
                <p>A few clicks and you can start your home workout with the</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel